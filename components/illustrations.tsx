"use client"

import { useEffect, useRef } from "react"

// Brand palette (mirrors tailwind.config.ts)
const NAVY_900 = "#061e35"
const NAVY_700 = "#0c3251"
const NAVY_600 = "#0f3c5f"
const BLUE_300 = "#8db1d5"
const BLUE_200 = "#b3cbe3"
const GOLD_500 = "#cdaf3c"
const GOLD_300 = "#e1cf8a"

// Deterministic PRNG so server and client render identical markup
function seeded(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const r1 = (n: number) => Math.round(n * 10) / 10

// Pauses SMIL animations for visitors who prefer reduced motion (CSS animations are handled in globals.css)
function useReducedMotion() {
  const ref = useRef<SVGSVGElement>(null)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) ref.current?.pauseAnimations()
  }, [])
  return ref
}

function Backdrop({ id, w, h }: { id: string; w: number; h: number }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={NAVY_900} />
          <stop offset="100%" stopColor={NAVY_600} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD_500} stopOpacity="0.18" />
          <stop offset="100%" stopColor={GOLD_500} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#${id}-bg)`} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Hero: reaching the hard-to-reach fringe of a population             */
/* ------------------------------------------------------------------ */

const HERO = (() => {
  const rand = seeded(7)
  const cx = 400
  const cy = 300
  const place = (d: number, a: number) => ({
    x: r1(Math.min(780, Math.max(20, cx + d * Math.cos(a) * 1.3))),
    y: r1(Math.min(580, Math.max(20, cy + d * Math.sin(a) * 0.95))),
  })
  const engaged = Array.from({ length: 60 }, () => place(45 + rand() * 120, rand() * Math.PI * 2))
  const fringe = Array.from({ length: 72 }, () => {
    const a = rand() * Math.PI * 2
    return { ...place(195 + rand() * 95, a), a }
  }).sort((p, q) => p.a - q.a)
  const targets = fringe.filter((_, i) => i % 6 === 0)
  const rest = fringe.filter((_, i) => i % 6 !== 0)
  const paths = targets.map((t, i) => {
    const mx = (cx + t.x) / 2
    const my = (cy + t.y) / 2
    const bend = i % 2 === 0 ? 0.25 : -0.25
    const qx = r1(mx - (t.y - cy) * bend)
    const qy = r1(my + (t.x - cx) * bend)
    return `M${cx},${cy} Q${qx},${qy} ${t.x},${t.y}`
  })
  // Stagger the reach order around the circle rather than sequentially
  const order = targets.map((_, i) => (i * 5) % targets.length)
  return { cx, cy, engaged, rest, targets, paths, order }
})()

export function HeroIllustration() {
  const ref = useReducedMotion()
  const { cx, cy, engaged, rest, targets, paths, order } = HERO
  const cycle = 9
  return (
    <svg
      ref={ref}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className="illustration w-full h-full"
      role="img"
      aria-label="A population map: an engaged core, a scattered hard-to-reach fringe, and tailored paths reaching out to convert people at the edges"
    >
      <Backdrop id="hero" w={800} h={600} />
      <style>{`
        .hero-path { fill: none; stroke: ${GOLD_500}; stroke-width: 1.5; stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: hero-draw ${cycle}s ease-in-out infinite; }
        .hero-target { fill: #4c6a85; transform-box: fill-box; transform-origin: center;
          animation: hero-convert ${cycle}s ease-in-out infinite; }
        .hero-ring { fill: none; stroke: ${GOLD_500}; transform-box: fill-box; transform-origin: center;
          animation: hero-pulse 3.6s ease-out infinite; }
        @keyframes hero-draw { 0% { stroke-dashoffset: 1; opacity: 0 } 6% { opacity: .9 }
          28% { stroke-dashoffset: 0; opacity: .9 } 75% { stroke-dashoffset: 0; opacity: .35 } 100% { stroke-dashoffset: 0; opacity: 0 } }
        @keyframes hero-convert { 0%, 26% { fill: #4c6a85; transform: scale(1) }
          32% { fill: ${GOLD_300}; transform: scale(2.1) } 40%, 80% { fill: ${GOLD_500}; transform: scale(1.5) }
          100% { fill: #4c6a85; transform: scale(1) } }
        @keyframes hero-pulse { 0% { transform: scale(1); opacity: .7 } 100% { transform: scale(4.2); opacity: 0 } }
      `}</style>

      <ellipse cx={cx} cy={cy} rx={390} ry={290} fill="url(#hero-glow)" />
      {[170, 290].map((d) => (
        <ellipse
          key={d}
          cx={cx}
          cy={cy}
          rx={d * 1.3}
          ry={d * 0.95}
          fill="none"
          stroke={BLUE_200}
          strokeOpacity="0.14"
          strokeDasharray="2 7"
        />
      ))}

      {engaged.map((p, i) => (
        <circle key={`e${i}`} cx={p.x} cy={p.y} r={3.6} fill={BLUE_300} opacity={0.75} />
      ))}
      {rest.map((p, i) => (
        <circle key={`f${i}`} cx={p.x} cy={p.y} r={3.2} fill="#5a7a96" opacity={0.85} />
      ))}

      {paths.map((d, i) => (
        <path
          key={`p${i}`}
          d={d}
          pathLength={1}
          className="hero-path"
          style={{ animationDelay: `${order[i] * (cycle / targets.length)}s` }}
        />
      ))}
      {targets.map((t, i) => (
        <circle
          key={`t${i}`}
          cx={t.x}
          cy={t.y}
          r={3.8}
          className="hero-target"
          style={{ animationDelay: `${order[i] * (cycle / targets.length)}s` }}
        />
      ))}

      <circle cx={cx} cy={cy} r={16} className="hero-ring" strokeWidth={1} />
      <circle cx={cx} cy={cy} r={16} className="hero-ring" strokeWidth={1} style={{ animationDelay: "1.8s" }} />
      <circle cx={cx} cy={cy} r={20} fill={GOLD_500} />
      <circle cx={cx} cy={cy} r={7} fill={NAVY_900} />

      <g fontFamily="var(--font-raleway), sans-serif" fontSize="12" letterSpacing="1.5" fill={BLUE_200}>
        <circle cx={34} cy={538} r={4} fill={GOLD_500} />
        <text x={46} y={542}>CONVERTED</text>
        <circle cx={34} cy={560} r={3.5} fill={BLUE_300} />
        <text x={46} y={564}>ENGAGED</text>
        <circle cx={34} cy={582} r={3} fill="#4c6a85" />
        <text x={46} y={586}>HARD TO REACH</text>
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* About: neuroscience (organic network) feeding strategy (results)    */
/* ------------------------------------------------------------------ */

const ABOUT = (() => {
  const rand = seeded(21)
  const nodes = Array.from({ length: 34 }, () => ({ x: r1(30 + rand() * 250), y: r1(45 + rand() * 360) }))
  const edges: string[] = []
  const seen = new Set<string>()
  nodes.forEach((n, i) => {
    nodes
      .map((m, j) => ({ j, d: (m.x - n.x) ** 2 + (m.y - n.y) ** 2 }))
      .filter((o) => o.j !== i)
      .sort((p, q) => p.d - q.d)
      .slice(0, 3)
      .forEach(({ j }) => {
        const key = [i, j].sort().join("-")
        if (seen.has(key)) return
        seen.add(key)
        const m = nodes[j]
        const bx = r1((n.x + m.x) / 2 + (n.y - m.y) * 0.2)
        const by = r1((n.y + m.y) / 2 + (m.x - n.x) * 0.2)
        edges.push(`M${n.x},${n.y} Q${bx},${by} ${m.x},${m.y}`)
      })
  })
  const bars = [70, 95, 120, 150, 195, 250]
  // Rightmost nodes, lowest first, so each bridge rises to a taller bar without crossing
  const outlets = [...nodes]
    .sort((p, q) => q.x - p.x)
    .slice(0, 3)
    .sort((p, q) => q.y - p.y)
  const bridges = outlets.map((o, i) => {
    const bx = 345 + (3 + i) * 38 + 13
    const by = 420 - bars[3 + i]
    return `M${o.x},${o.y} C${o.x + 80},${o.y} ${bx - 60},${by} ${bx},${by}`
  })
  return { nodes, edges, bars, bridges }
})()

export function ScienceStrategyIllustration() {
  const ref = useReducedMotion()
  const { nodes, edges, bars, bridges } = ABOUT
  return (
    <svg
      ref={ref}
      viewBox="0 0 600 500"
      preserveAspectRatio="xMidYMid slice"
      className="illustration w-full h-full"
      role="img"
      aria-label="A neural network on the left feeding signals into a rising results chart on the right: science meets strategy"
    >
      <Backdrop id="about" w={600} h={500} />
      <style>{`
        .about-bar { transform-box: fill-box; transform-origin: bottom; animation: about-grow 7s ease-in-out infinite; }
        .about-bridge { fill: none; stroke: ${GOLD_500}; stroke-width: 1.4; stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: about-draw 7s ease-in-out infinite; }
        @keyframes about-grow { 0% { transform: scaleY(.08) } 35%, 85% { transform: scaleY(1) } 100% { transform: scaleY(.08) } }
        @keyframes about-draw { 0%, 10% { stroke-dashoffset: 1; opacity: 0 } 15% { opacity: .85 }
          40%, 80% { stroke-dashoffset: 0; opacity: .85 } 100% { stroke-dashoffset: 0; opacity: 0 } }
      `}</style>

      {edges.map((d, i) => (
        <path key={i} id={`about-edge-${i}`} d={d} fill="none" stroke={BLUE_300} strokeOpacity="0.35" strokeWidth="1" />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i % 5 === 0 ? 5 : 3.2} fill={i % 5 === 0 ? BLUE_200 : BLUE_300} />
      ))}
      {edges
        .filter((_, i) => i % 3 === 0)
        .map((d, i) => (
          <circle key={`s${i}`} r={2.6} fill={GOLD_300}>
            <animateMotion dur={`${2.4 + (i % 4) * 0.6}s`} begin={`${i * 0.35}s`} repeatCount="indefinite" path={d} />
          </circle>
        ))}

      {bridges.map((d, i) => (
        <path key={i} d={d} pathLength={1} className="about-bridge" style={{ animationDelay: `${i * 0.3}s` }} />
      ))}

      <line x1={335} y1={420} x2={575} y2={420} stroke={BLUE_200} strokeOpacity="0.4" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={345 + i * 38}
          y={420 - h}
          width={26}
          height={h}
          fill={i >= 4 ? GOLD_500 : BLUE_300}
          fillOpacity={i >= 4 ? 1 : 0.55}
          className="about-bar"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}

      <g fontFamily="var(--font-raleway), sans-serif" fontSize="13" letterSpacing="3" fill={GOLD_300}>
        <text x={155} y={460} textAnchor="middle">
          SCIENCE
        </text>
        <text x={455} y={460} textAnchor="middle">
          STRATEGY
        </text>
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Approach: the four-step conversion loop with measured lift          */
/* ------------------------------------------------------------------ */

export function ConversionLoopIllustration() {
  const ref = useReducedMotion()
  const c = 250
  const R = 170
  const loop = `M${c},${c - R} A${R},${R} 0 1,1 ${c - 0.01},${c - R}`
  const cycle = 8
  const steps = [
    { n: "01", label: "MAP", x: c, y: c - R, lx: c, ly: c - R + 52, anchor: "middle" },
    { n: "02", label: "DESIGN", x: c + R, y: c, lx: c + R - 44, ly: c + 4, anchor: "end" },
    { n: "03", label: "ORCHESTRATE", x: c, y: c + R, lx: c, ly: c + R - 44, anchor: "middle" },
    { n: "04", label: "MEASURE", x: c - R, y: c, lx: c - R + 44, ly: c + 4, anchor: "start" },
  ] as const
  return (
    <svg
      ref={ref}
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid slice"
      className="illustration w-full h-full"
      role="img"
      aria-label="The Behaviorally Informed Conversion System as a loop: map, design, orchestrate, measure, with program results lifting above the control group"
    >
      <Backdrop id="loop" w={500} h={500} />
      <style>{`
        .loop-progress { fill: none; stroke: ${GOLD_500}; stroke-width: 2; stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: loop-draw ${cycle}s linear infinite; }
        .loop-node { fill: ${NAVY_700}; stroke: ${GOLD_500}; stroke-width: 1.5; animation: loop-flash ${cycle}s linear infinite; }
        .loop-bar { transform-box: fill-box; transform-origin: bottom; animation: loop-grow ${cycle}s ease-in-out infinite; }
        @keyframes loop-draw { 0% { stroke-dashoffset: 1; opacity: .9 } 92% { stroke-dashoffset: 0; opacity: .9 } 100% { stroke-dashoffset: 0; opacity: 0 } }
        @keyframes loop-flash { 0%, 100% { stroke: ${GOLD_300}; stroke-width: 6 } 12%, 88% { stroke: ${GOLD_500}; stroke-width: 1.5 } }
        @keyframes loop-grow { 0%, 70% { transform: scaleY(.15) } 85%, 97% { transform: scaleY(1) } 100% { transform: scaleY(.15) } }
      `}</style>

      <circle cx={c} cy={c} r={R + 60} fill="url(#loop-glow)" />
      <circle cx={c} cy={c} r={R} fill="none" stroke={BLUE_300} strokeOpacity="0.3" strokeWidth="2" />
      <path d={loop} pathLength={1} className="loop-progress" />

      {steps.map((s, i) => (
        <g key={s.n}>
          <circle
            cx={s.x}
            cy={s.y}
            r={28}
            className="loop-node"
            style={{ animationDelay: `${(i * cycle) / 4 - cycle}s` }}
          />
          <text
            x={s.x}
            y={s.y + 6}
            textAnchor="middle"
            fontFamily="var(--font-playfair), serif"
            fontSize="17"
            fill={GOLD_300}
          >
            {s.n}
          </text>
          <text
            x={s.lx}
            y={s.ly}
            textAnchor={s.anchor}
            fontFamily="var(--font-raleway), sans-serif"
            fontSize="11"
            letterSpacing="2"
            fill={BLUE_200}
          >
            {s.label}
          </text>
        </g>
      ))}

      <circle r={6} fill={GOLD_300}>
        <animateMotion dur={`${cycle}s`} repeatCount="indefinite" path={loop} />
      </circle>

      <g>
        <line x1={176} y1={300} x2={324} y2={300} stroke={BLUE_200} strokeOpacity="0.4" />
        <rect x={188} y={255} width={34} height={45} fill={BLUE_300} fillOpacity="0.55" />
        <rect x={278} y={200} width={34} height={100} fill={GOLD_500} className="loop-bar" />
        <g fontFamily="var(--font-raleway), sans-serif" fontSize="10" letterSpacing="1.5" fill={BLUE_200}>
          <text x={205} y={316} textAnchor="middle">
            CONTROL
          </text>
          <text x={295} y={316} textAnchor="middle">
            PROGRAM
          </text>
        </g>
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Manifesto: standard outreach stops at the barrier, tailored paths   */
/* route around it to action                                           */
/* ------------------------------------------------------------------ */

const LANES = (() => {
  const rand = seeded(42)
  return ["TRUST", "EFFORT", "ACCESS", "RISK"].map((barrier, i) => {
    const y = 95 + i * 100
    const cluster = Array.from({ length: 9 }, () => ({ x: r1(48 + rand() * 50), y: r1(y - 20 + rand() * 40) }))
    const path = `M110,${y} C205,${y} 225,${y - 40} 300,${y - 40} C375,${y - 40} 395,${y} 470,${y} L556,${y}`
    return { barrier, y, cluster, path }
  })
})()

export function BarrierPathsIllustration() {
  const ref = useReducedMotion()
  const dur = 4.2
  return (
    <svg
      ref={ref}
      viewBox="0 0 640 480"
      preserveAspectRatio="xMidYMid meet"
      className="illustration w-full h-auto block"
      role="img"
      aria-label="Four audience segments. Standard outreach stops at each segment's barrier (trust, effort, access, risk) while a tailored path routes around it to action"
    >
      <Backdrop id="lanes" w={640} h={480} />
      <g fontFamily="var(--font-raleway), sans-serif" fontSize="11" letterSpacing="2.5" fill={GOLD_300}>
        <text x={73} y={34} textAnchor="middle">
          SEGMENTS
        </text>
        <text x={300} y={34} textAnchor="middle">
          BARRIERS
        </text>
        <text x={580} y={34} textAnchor="middle">
          ACTION
        </text>
      </g>

      {LANES.map((lane, i) => (
        <g key={lane.barrier}>
          {lane.cluster.map((p, j) => (
            <circle key={j} cx={p.x} cy={p.y} r={3} fill={BLUE_300} opacity={0.65} />
          ))}
          <line
            x1={110}
            y1={lane.y}
            x2={290}
            y2={lane.y}
            stroke={BLUE_300}
            strokeOpacity="0.35"
            strokeDasharray="3 5"
          />
          <rect x={294} y={lane.y - 22} width={10} height={44} fill={BLUE_200} fillOpacity="0.28" />
          <text
            x={299}
            y={lane.y + 40}
            textAnchor="middle"
            fontFamily="var(--font-raleway), sans-serif"
            fontSize="10"
            letterSpacing="2"
            fill={BLUE_200}
          >
            {lane.barrier}
          </text>
          <path d={lane.path} fill="none" stroke={GOLD_500} strokeOpacity="0.45" strokeWidth="1.4" />
          <circle r={4.5} fill={GOLD_300}>
            <animateMotion dur={`${dur}s`} begin={`${i * 0.7}s`} repeatCount="indefinite" path={lane.path} />
          </circle>
          <circle cx={580} cy={lane.y} r={16} fill={NAVY_700} stroke={GOLD_500} strokeWidth="1.4" />
          <path
            d={`M572,${lane.y} l5,5 l10,-11`}
            fill="none"
            stroke={GOLD_300}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0}
          >
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.86;0.9;0.97;1"
              dur={`${dur}s`}
              begin={`${i * 0.7}s`}
              repeatCount="indefinite"
            />
          </path>
        </g>
      ))}
    </svg>
  )
}
