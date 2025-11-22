import { Calendar, Notebook, Mail, Share2, Workflow, Shield, Brain, PlugZap } from "lucide-react";

const features = [
  { icon: Brain, title: "Reason + Orchestrate", desc: "Plans multi-step workflows with tool-aware reasoning and adaptive retries." },
  { icon: Calendar, title: "Calendar", desc: "Schedules, reschedules, and negotiates conflicts across teams." },
  { icon: Mail, title: "Email", desc: "Reads, drafts, and triages with context retention and guardrails." },
  { icon: Notebook, title: "Notes", desc: "Captures decisions, summaries, and next steps automatically." },
  { icon: Share2, title: "CRM / HRIS", desc: "Updates records, files reports, and coordinates approvals securely." },
  { icon: Shield, title: "Trust Controls", desc: "Policy-driven actions, audit trails, and human-in-the-loop checkpoints." },
  { icon: Workflow, title: "Orchestration Engine", desc: "Parallelizes tasks, monitors outcomes, and adapts to change." },
  { icon: PlugZap, title: "Integrations", desc: "Connects to your stack with minimal setup and zero noise." },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_80%_0%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-white">Capabilities</h2>
          <p className="mt-2 text-white/60">Tools snap into a single intelligent operator — calm, fast, and dependable.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-inset ring-white/10 flex items-center justify-center">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <div className="mt-4 text-white font-medium">{f.title}</div>
              <div className="mt-1 text-sm text-white/60 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
