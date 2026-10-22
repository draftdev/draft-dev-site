'use client'

// RevenueLineChart from github.com/Subhan-code/Amicro--Micro-transitions-
// (src/components/dither-charts/RevenueLineChart.tsx), adapted minimally:
// 'use client', hook import path, our three traffic series with an
// auto-cycle, and a taller canvas. Canvas drawing code is unchanged.
import React, { useEffect, useRef, useState } from 'react';
import { useCanvasSetup } from '@/hooks/useCanvasSetup';

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

interface SeriesIcon {
  src: string;
  alt: string;
  /** white-filled asset that needs darkening on light backgrounds */
  invert?: boolean;
}

const REVENUE_DATA: { name: string; total: number; data: number[]; icons: SeriesIcon[] }[] = [
  {
    name: 'AI traffic',
    total: 12450,
    data: [800, 900, 1050, 1250, 1500, 1800, 2150, 2600, 3100, 3700, 4400, 5200],
    icons: [
      { src: '/draft/logos/openai.svg', alt: 'ChatGPT', invert: true },
      { src: '/draft/logos/claude-color.svg', alt: 'Claude' },
      { src: '/draft/logos/grok.svg', alt: 'Grok', invert: true },
      { src: '/draft/logos/microsoft.svg', alt: 'Microsoft Copilot' },
    ],
  },
  {
    name: 'Organic traffic',
    total: 9800,
    data: [1500, 1750, 2000, 2300, 2650, 3000, 3400, 3800, 4150, 4400, 4650, 4800],
    icons: [{ src: '/draft/logos/google-color.svg', alt: 'Google' }],
  },
  {
    name: 'Third-party distribution traffic',
    total: 8600,
    data: [900, 1000, 1150, 1350, 1500, 1700, 1900, 2150, 2350, 2500, 2600, 2700],
    icons: [
      { src: '/draft/logos/community/dev.png', alt: 'DEV Community' },
      { src: '/draft/logos/community/stackoverflow.png', alt: 'Stack Overflow' },
      { src: '/draft/logos/community/reddit.png', alt: 'Reddit' },
      { src: '/draft/logos/community/hashnode.png', alt: 'Hashnode' },
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

export function RevenueLineChart({ theme = 'dark', compact = false }: { theme?: 'dark' | 'light'; compact?: boolean }) {
  const [periodIndex, setPeriodIndex] = useState(0);
  const period = REVENUE_DATA[periodIndex];
  const { canvasRef, rect, isVisible, reducedMotion } = useCanvasSetup();

  const ink = theme === 'dark' ? '#FFFFFF' : '#544b84';

  const targetDataRef = useRef(period.data);
  const fromDataRef = useRef(period.data.map(() => 0));
  const morphStartTimeRef = useRef(0);

  useEffect(() => {
    // Grow up from the baseline on mount and on every series change.
    fromDataRef.current = period.data.map(() => 0);
    targetDataRef.current = period.data;
    morphStartTimeRef.current = performance.now();
  }, [period]);

  // Auto-cycle: AI traffic -> Organic traffic -> Third-party distribution.
  useEffect(() => {
    if (reducedMotion) return;
    const t = setInterval(
      () => setPeriodIndex((i) => (i + 1) % REVENUE_DATA.length),
      CYCLE_MS,
    );
    return () => clearInterval(t);
  }, [reducedMotion]);

  useEffect(() => {
    let req: number;
    let time = 0;
    const draw = () => {
      if (!isVisible.current) { req = requestAnimationFrame(draw); return; }

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { width: w, height: h } = rect.current;
      if (w === 0 || h === 0) { req = requestAnimationFrame(draw); return; }

      time += reducedMotion ? 0 : 0.02;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      const prog = reducedMotion ? 1 : Math.min(1, (performance.now() - morphStartTimeRef.current) / 900);
      const e = 1 - Math.pow(2, -10 * prog);

      const points = period.data.length;
      const maxVal = Math.max(...period.data, ...fromDataRef.current) * 1.2;

      // Reserve a bottom band for the month axis; the chart draws above it.
      const axisH = 24;
      const ch = h - axisH;

      const stepX = w / (points - 1);
      const cell = Math.max(2, Math.round(w / 200));

      ctx.beginPath();
      for (let i = 0; i < points; i++) {
        const target = targetDataRef.current[i];
        const from = fromDataRef.current[i];
        const val = from + (target - from) * e;

        const x = i * stepX;
        const y = ch - (val / maxVal) * ch;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = ink;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.stroke();

      ctx.lineTo(w, ch);
      ctx.lineTo(0, ch);
      ctx.closePath();

      ctx.save();
      ctx.clip();

      ctx.fillStyle = ink;

      for (let x = 0; x <= w; x += cell) {
        for (let y = 0; y <= ch; y += cell) {
          const jx = x + cell / 2;
          const jy = y + cell / 2;
          const jit = hash(jx, jy);

          const gradientFalloff = Math.max(0, 1 - (jy / ch));
          const waveRaw = reducedMotion ? 0 :
            Math.sin(jx * 0.05 + time) + Math.sin(jy * 0.05 + time * 0.7);
          const mod = smoothstep(-1.5, 1.5, waveRaw);

          const sz = cell * (0.3 * gradientFalloff + 0.3 * mod) * (0.8 + 0.4 * jit);
          if (sz > 0) {
            ctx.fillRect(x + (cell - sz)/2, y + (cell - sz)/2, sz, sz);
          }
        }
      }

      ctx.restore();

      // Month labels along the x-axis.
      ctx.font = '11px Inter, system-ui, sans-serif';
      ctx.fillStyle = theme === 'dark' ? 'rgba(255,255,255,0.5)' : '#9ca3af';
      ctx.textBaseline = 'alphabetic';
      for (let i = 0; i < points; i++) {
        ctx.textAlign = i === 0 ? 'left' : i === points - 1 ? 'right' : 'center';
        ctx.fillText(MONTHS[i % 12], i * stepX, h - 6);
      }

      // Growth badge riding the tip of the line, counting up as it grows —
      // the dofollow-style "↗ ..." stat pill so the growth is explicit.
      {
        const first = targetDataRef.current[0];
        const lastFrom = fromDataRef.current[points - 1];
        const lastTarget = targetDataRef.current[points - 1];
        const lastVal = lastFrom + (lastTarget - lastFrom) * e;
        const yTip = ch - (lastVal / maxVal) * ch;

        ctx.beginPath();
        ctx.arc(w - 4, yTip, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = ink;
        ctx.fill();

        const finalX = lastTarget / first;
        const shown = 1 + (finalX - 1) * e;
        const label = `↗ ${shown.toFixed(1)}× in 12 months`;

        ctx.font = "600 13px Inter, system-ui, sans-serif";
        const tw = ctx.measureText(label).width;
        const pillW = tw + 24;
        const pillH = 28;
        const pillX = Math.max(4, w - pillW - 16);
        const pillY = Math.max(4, yTip - pillH - 14);

        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(pillX, pillY, pillW, pillH, pillH / 2);
        } else {
          ctx.rect(pillX, pillY, pillW, pillH);
        }
        ctx.fillStyle = ink;
        ctx.fill();

        ctx.fillStyle = theme === 'dark' ? '#201b3d' : '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, pillX + pillW / 2, pillY + pillH / 2 + 1);
      }

      ctx.restore();
      req = requestAnimationFrame(draw);
    };
    req = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(req);
  }, [period, reducedMotion, ink]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2">
      <div
        key={periodIndex}
        className="flex w-full items-center justify-between gap-3 self-start"
        style={{ animation: 'chart-fade-up 0.5s ease-out both' }}
      >
        <p className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {period.name}
        </p>
        <span className="flex items-center gap-2">
          {period.icons.map((icon) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={icon.src}
              src={icon.src}
              alt={icon.alt}
              title={icon.alt}
              className={`h-5 w-5 rounded-[5px] object-contain ${
                icon.invert && theme !== 'dark' ? 'opacity-70 brightness-0' : ''
              }`}
            />
          ))}
        </span>
      </div>
      <div className={`relative w-full ${compact ? 'h-[120px]' : 'h-[260px]'} mt-6 flex items-center justify-center`}>
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {REVENUE_DATA.map((s, i) => (
          <button
            key={s.name}
            type="button"
            aria-label={`Show ${s.name}`}
            onClick={() => setPeriodIndex(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === periodIndex ? 20 : 6,
              opacity: i === periodIndex ? 1 : 0.4,
              background: ink,
            }}
          />
        ))}
      </div>
    </div>
  );
}
