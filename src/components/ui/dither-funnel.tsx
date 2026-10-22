'use client'

// DitherFunnelChart from github.com/Subhan-code/Amicro--Micro-transitions-
// (src/components/dither-charts/DitherFunnelChart.tsx), adapted minimally:
// 'use client', hook import path, launch-funnel stages with light-theme
// brand colors, grow-from-zero + auto-cycle, in-bar stage labels, and the
// series header/dots to match the revenue chart. Canvas dither code is
// unchanged.
import React, { useEffect, useRef, useState } from 'react';
import { useCanvasSetup } from '@/hooks/useCanvasSetup';

const LIGHT_COLORS = ['#544b84', '#6a6296', '#8179a8', '#9790ba', '#aea8cc'];
const DARK_COLORS = ['#FFFFFF', '#E2E8F0', '#CBD5E1', '#94A3B8', '#64748B'];

const STAGES_DATA = [
  {
    name: 'Launch awareness',
    stages: [
      { label: 'Blog posts', val: 92 },
      { label: 'Video', val: 74 },
      { label: 'Comparison pages', val: 66 },
      { label: 'Social', val: 55 },
      { label: 'Lead magnets', val: 45 },
    ],
  },
];

const CYCLE_MS = 4000;

const smoothstep = (min: number, max: number, value: number) => {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
};

const hash = (x: number, y: number) => {
  let h = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return h - Math.floor(h);
};

export function DitherFunnelChart({ theme = 'dark', compact = false }: { theme?: 'dark' | 'light'; compact?: boolean }) {
  const [periodIndex, setPeriodIndex] = useState(0);
  const period = STAGES_DATA[periodIndex];
  const { canvasRef, rect, isVisible, reducedMotion } = useCanvasSetup();

  const colors = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;

  const targetDataRef = useRef(period.stages);
  const fromDataRef = useRef(period.stages.map((s) => ({ ...s, val: 0 })));
  const morphStartTimeRef = useRef(0);

  useEffect(() => {
    // Grow out from the left on mount and on every period change.
    fromDataRef.current = period.stages.map((s) => ({ ...s, val: 0 }));
    targetDataRef.current = period.stages;
    morphStartTimeRef.current = performance.now();
  }, [period]);

  useEffect(() => {
    if (reducedMotion || STAGES_DATA.length < 2) return;
    const t = setInterval(
      () => setPeriodIndex((i) => (i + 1) % STAGES_DATA.length),
      CYCLE_MS,
    );
    return () => clearInterval(t);
  }, [reducedMotion]);

  useEffect(() => {
    let req: number;
    // Throttle to 30fps — funnel bars are nearly static
    let lastFrame = 0;
    let time = 0;
    const draw = (now: number) => {
      req = requestAnimationFrame(draw);
      if (!isVisible.current) return;
      if (now - lastFrame < 33) return; // ~30fps
      lastFrame = now;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { width: w, height: h } = rect.current;
      if (w === 0 || h === 0) return;

      time += reducedMotion ? 0 : 0.02;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      const prog = reducedMotion ? 1 : Math.min(1, (performance.now() - morphStartTimeRef.current) / 900);
      const e = 1 - Math.pow(2, -10 * prog);

      const count = period.stages.length;
      const rowH = (h - (count - 1) * 6) / count;
      const cell = Math.max(2, Math.round(w / 200));
      const t2 = time;

      for (let i = 0; i < count; i++) {
        const target = targetDataRef.current[i];
        const from = fromDataRef.current[i];
        const val = from.val + (target.val - from.val) * e;

        const stageW = (val / 100) * w;
        const yTop = i * (rowH + 6);

        ctx.save();
        ctx.beginPath();
        ctx.rect(0, yTop, stageW, rowH);
        ctx.clip();

        ctx.globalAlpha = 0.85;
        ctx.fillStyle = colors[i % colors.length];

        for (let bx = 0; bx <= Math.ceil(stageW); bx += cell) {
          for (let by = Math.floor(yTop); by <= Math.ceil(yTop + rowH); by += cell) {
            const jx = bx + cell / 2;
            const jy = by + cell / 2;
            const jit = hash(jx, jy);

            const waveRaw = reducedMotion ? 0 :
              Math.sin(jx * 0.05 + t2) + Math.sin(jy * 0.05 + t2 * 0.7);
            const mod = smoothstep(-1.5, 1.5, waveRaw);

            const sz = cell * (0.35 + 0.35 * mod) * (0.8 + 0.4 * jit);
            ctx.fillRect(bx + (cell - sz)/2, by + (cell - sz)/2, sz, sz);
          }
        }
        ctx.restore();

        // Stage label + animated share on a solid pill — the dithered bars
        // are mostly background, so bare text is unreadable on them.
        const pct = Math.round(val);
        ctx.globalAlpha = 1;
        ctx.font = '600 13px Inter, system-ui, sans-serif';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'left';
        const labelText = `${target.label} · ${pct}%`;
        const tw = ctx.measureText(labelText).width;
        const pillW = tw + 18;
        const pillH = 24;
        const pillY = yTop + (rowH - pillH) / 2;
        const inside = stageW > pillW + 16;
        const pillX = inside ? 8 : Math.min(stageW + 8, w - pillW - 4);

        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(pillX, pillY, pillW, pillH, pillH / 2);
        } else {
          ctx.rect(pillX, pillY, pillW, pillH);
        }
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.fillStyle = theme === 'dark' ? '#201b3d' : '#FFFFFF';
        ctx.fillText(labelText, pillX + 9, pillY + pillH / 2 + 1);
      }

      ctx.restore();
    };
    req = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(req);
  }, [period, reducedMotion, colors, theme]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2">
      <p
        key={periodIndex}
        className={`self-start text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
        style={{ animation: 'chart-fade-up 0.5s ease-out both' }}
      >
        {period.name}
      </p>
      <div className={`relative w-full ${compact ? 'h-[140px]' : 'h-[240px]'} mt-6 flex items-center justify-center`}>
        <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />
      </div>
      <div className={`mt-6 justify-center gap-2 ${STAGES_DATA.length < 2 ? 'hidden' : 'flex'}`}>
        {STAGES_DATA.map((s, i) => (
          <button
            key={s.name}
            type="button"
            aria-label={`Show ${s.name}`}
            onClick={() => setPeriodIndex(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === periodIndex ? 20 : 6,
              opacity: i === periodIndex ? 1 : 0.4,
              background: theme === 'dark' ? '#FFFFFF' : '#544b84',
            }}
          />
        ))}
      </div>
    </div>
  );
}
