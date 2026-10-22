'use client'

// DitherStackedChart from github.com/Subhan-code/Amicro--Micro-transitions-
// (src/components/dither-charts/DitherStackedChart.tsx), adapted: 'use
// client', hook import path, monthly content-output data with a flat dashed
// headcount line, and brand colors on the light theme. Canvas dither code
// is unchanged.
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useCanvasSetup } from '@/hooks/useCanvasSetup';

const PERIODS = [{ name: 'Year', mult: 1 }];

const BRANCHES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const BANDS_DARK = [
  { name: 'Draft.dev', color: '#FFFFFF', share: 0.62 },
  { name: 'Your team', color: '#CBD5E1', share: 0.23 },
  { name: 'Refreshes', color: '#94A3B8', share: 0.15 },
];
const BANDS_LIGHT = [
  { name: 'Draft.dev', color: '#544b84', share: 0.62 },
  { name: 'Your team', color: '#8179a8', share: 0.23 },
  { name: 'Refreshes', color: '#aea8cc', share: 0.15 },
];

const BASE_TOTAL = 30;
const BRANCH_WEIGHTS = [0.22, 0.27, 0.33, 0.4, 0.48, 0.57, 0.66, 0.75, 0.83, 0.9, 0.96, 1.0];

const smoothstep = (min: number, max: number, value: number) => {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
};

const hash = (x: number, y: number) => {
  let h = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return h - Math.floor(h);
};

const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

const getAxisMax = (maxVal: number) => {
  if (maxVal === 0) return 100;
  const target = maxVal * 1.05;
  const power = Math.pow(10, Math.floor(Math.log10(target)));
  const normalized = target / power;
  let multiplier = 10;
  if (normalized <= 1.0) multiplier = 1;
  else if (normalized <= 2.0) multiplier = 2;
  else if (normalized <= 5.0) multiplier = 5;

  return multiplier * power;
};

function drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, rTop: number, rBottom: number) {
  ctx.beginPath();
  ctx.moveTo(x + rTop, y);
  ctx.lineTo(x + w - rTop, y);
  ctx.arcTo(x + w, y, x + w, y + rTop, rTop);
  ctx.lineTo(x + w, y + h - rBottom);
  ctx.arcTo(x + w, y + h, x + w - rBottom, y + h, rBottom);
  ctx.lineTo(x + rBottom, y + h);
  ctx.arcTo(x, y + h, x, y + h - rBottom, rBottom);
  ctx.lineTo(x, y + rTop);
  ctx.arcTo(x, y, x + rTop, y, rTop);
  ctx.closePath();
}

interface DitherStackedChartProps {
  theme?: 'dark' | 'light';
  compact?: boolean;
}

export function DitherStackedChart({ theme = 'dark', compact = false }: DitherStackedChartProps) {
  const [periodIndex] = useState(0);
  const [hoverBranch, setHoverBranch] = useState<number | null>(null);
  const [hoverBand, setHoverBand] = useState<number | null>(null);
  const { canvasRef, rect, isVisible, reducedMotion } = useCanvasSetup();

  const period = PERIODS[periodIndex];
  const BANDS = theme === 'dark' ? BANDS_DARK : BANDS_LIGHT;

  const { data, totalValue, axisMax } = useMemo(() => {
    let tot = 0;
    const branches = BRANCHES.map((b, bIdx) => {
      const branchBase = BASE_TOTAL * BRANCH_WEIGHTS[bIdx];
      let branchTotal = 0;
      const bands = BANDS.map((band, bandIdx) => {
        const wobble = 0.9 + 0.14 * Math.sin(bIdx * 3.1 + bandIdx * 1.7);
        const val = Math.round(branchBase * period.mult * band.share * wobble);
        branchTotal += Math.max(1, val);
        return { value: Math.max(1, val) };
      });
      tot += branchTotal;
      return { total: branchTotal, bands };
    });

    const maxBranchTotal = Math.max(...branches.map(b => b.total));
    const axMax = getAxisMax(maxBranchTotal);

    return { data: branches, totalValue: tot, axisMax: axMax };
  }, [periodIndex, BANDS, period.mult]);

  const timeRef = useRef(0);
  const requestRef = useRef<number>(undefined);
  const drawnRef = useRef<Map<string, number>>(new Map());
  const morphStartTimeRef = useRef(0);
  const fromStateRef = useRef<Map<string, number>>(new Map());

  const hoverRef = useRef({ b: hoverBranch, band: hoverBand });
  useEffect(() => { hoverRef.current = { b: hoverBranch, band: hoverBand }; }, [hoverBranch, hoverBand]);

  useEffect(() => {
    fromStateRef.current = new Map(drawnRef.current);
    morphStartTimeRef.current = performance.now();
  }, [data]);

  useEffect(() => {
    const draw = () => {
      if (!isVisible.current) {
        requestRef.current = requestAnimationFrame(draw);
        return;
      }

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { width: w, height: h } = rect.current;
      if (w === 0 || h === 0) {
        requestRef.current = requestAnimationFrame(draw);
        return;
      }

      timeRef.current += reducedMotion ? 0 : 0.02;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);

      const colW = w / BRANCHES.length;
      const barW = Math.min(colW * 0.62, 54);
      const cell = Math.max(3, Math.round(w / 200));
      const HIGHLIGHT = theme === 'dark' ? '#FFFFFF' : '#3e3663';
      const t2 = timeRef.current;

      let prog = 0;
      if (reducedMotion) {
        prog = 1;
      } else if (morphStartTimeRef.current > 0) {
        prog = (performance.now() - morphStartTimeRef.current) / 620;
        if (prog > 1) prog = 1;
      } else {
        prog = 1;
      }

      const n = BRANCHES.length;

      for (let i = 0; i < n; i++) {
        const bp = 1 - Math.pow(1 - clamp((prog - i * 0.05) / (1 - (n - 1) * 0.05), 0, 1), 3);
        const colX = i * colW;
        const cx = colX + colW / 2;
        const x0 = cx - barW / 2;

        let currentY = h;

        for (let j = 0; j < BANDS.length; j++) {
          const key = `${i}-${j}`;
          const targetH = (data[i].bands[j].value / axisMax) * h;
          const fromH = fromStateRef.current.get(key) || 0;
          const segH = Math.max(0.1, fromH + (targetH - fromH) * bp);

          drawnRef.current.set(key, segH);

          const yBottom = currentY;
          const yTop = currentY - segH;
          const rTop = j === BANDS.length - 1 ? 8 : 5;
          const rBottom = j === 0 ? 7 : 5;

          const hb = hoverRef.current.b;
          const hband = hoverRef.current.band;

          const isHot = hb === i && hband === j;
          const isOtherBranch = hb !== null && hb !== i;
          const isOtherBandInBranch = hb === i && hband !== null && hband !== j;

          let alpha = 1.0;
          if (isOtherBranch) alpha = 0.3;
          else if (isOtherBandInBranch) alpha = 0.48;

          const color = isHot ? HIGHLIGHT : BANDS[j].color;

          ctx.save();
          drawRoundedRect(ctx, x0, yTop, barW, segH, rTop, rBottom);
          ctx.clip();

          ctx.globalAlpha = alpha * 0.85;
          ctx.fillStyle = color;

          for (let bx = x0; bx < x0 + barW; bx += cell) {
            for (let by = yTop; by < yBottom; by += cell) {
              const dx = bx - (x0 + barW / 2);
              const dy = by - (yTop + segH / 2);
              const dist = Math.sqrt(dx*dx + dy*dy);

              const jitter = hash(bx, by);
              const wave = reducedMotion ? 0 : Math.sin(dist * 0.1 - t2 * 2) * 0.15;
              const sz = cell * (0.68 + wave + jitter * 0.2);

              ctx.fillRect(bx + (cell - sz)/2, by + (cell - sz)/2, sz, sz);
            }
          }

          ctx.restore();
          currentY = yTop;
        }
      }

      // Flat dashed headcount line — output grows, the team does not.
      ctx.globalAlpha = 1;
      ctx.strokeStyle = theme === 'dark' ? 'rgba(255,255,255,0.5)' : '#6b7280';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(0, h * 0.72);
      ctx.lineTo(w, h * 0.72);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();
      requestRef.current = requestAnimationFrame(draw);
    };

    requestRef.current = requestAnimationFrame(draw);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [data, axisMax, reducedMotion, theme, BANDS]);

  if (compact) {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <div className="relative w-full h-[120px]">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full rounded-2xl p-6 transition-colors sm:p-8 ${
      theme === 'dark' ? 'bg-[#201b3d] text-white' : 'bg-gray-50 text-black'
    }`}>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-lg font-semibold">Content output</p>
        <p className={`flex items-center gap-2 text-xs font-medium ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
          <span className={`inline-block h-0 w-6 border-t-2 border-dashed ${theme === 'dark' ? 'border-white/50' : 'border-neutral-400'}`} />
          Headcount
        </p>
      </div>

      {/* Band Legend */}
      <div className="flex items-center gap-4 mb-4 text-xs font-medium">
        {BANDS.map((band, idx) => (
          <div
            key={band.name}
            onMouseEnter={() => setHoverBand(idx)}
            onMouseLeave={() => setHoverBand(null)}
            className="flex items-center gap-1.5 cursor-pointer opacity-80 hover:opacity-100"
          >
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: band.color }} />
            <span>{band.name}</span>
          </div>
        ))}
      </div>

      {/* Main Canvas Chart */}
      <div className="relative h-[200px] w-full rounded-xl overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Branch Labels */}
      <div className="mt-3 grid grid-cols-12 gap-1 text-center text-[10px] font-semibold">
        {BRANCHES.map((branch, idx) => (
          <div
            key={branch}
            onMouseEnter={() => setHoverBranch(idx)}
            onMouseLeave={() => setHoverBranch(null)}
            className={`py-1 rounded cursor-pointer transition-all ${
              hoverBranch === idx
                ? (theme === 'dark' ? 'bg-white/10 text-white' : 'bg-neutral-200 text-black')
                : (theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black')
            }`}
          >
            {branch}
          </div>
        ))}
      </div>
    </div>
  );
}
