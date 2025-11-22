export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Put Aether to work</h3>
          <p className="mt-3 text-white/70">Start with a guarded sandbox. Approve actions, tune policies, and scale to full autonomy.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-black font-medium px-5 py-3 ring-1 ring-white/20 shadow-[0_12px_40px_rgba(251,146,60,0.35)] hover:shadow-[0_12px_56px_rgba(251,146,60,0.5)] transition">Request access</a>
            <a href="#features" className="rounded-xl border border-white/15 bg-white/5 text-white px-5 py-3 hover:border-white/25 transition">View docs</a>
          </div>
        </div>
      </div>
    </section>
  );
}
