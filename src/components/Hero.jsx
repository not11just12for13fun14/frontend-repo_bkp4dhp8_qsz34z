import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      {/* Gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(251,146,60,0.25),transparent)]" />

      {/* Spline 3D */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-orange-500" /> Live Orchestration Engine
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight text-white">
            Aether — The Autonomous Orchestrated Worker
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            An intelligent, reliable, and calm digital employee that plans, executes, and adapts multi-step workflows across your tools. Built for high-trust operations in modern teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-black font-medium px-5 py-3 ring-1 ring-white/20 shadow-[0_12px_40px_rgba(251,146,60,0.35)] hover:shadow-[0_12px_56px_rgba(251,146,60,0.5)] transition">
              Start orchestration <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 hover:border-white/25 transition">
              Explore capabilities
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-white/60 text-sm">
            <div>Private by design</div>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <div>Enterprise-ready</div>
            <div className="h-1 w-1 rounded-full bg-white/20" />
            <div>Observe, decide, act</div>
          </div>
        </div>
      </div>
    </section>
  );
}
