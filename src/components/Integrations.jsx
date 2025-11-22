import { Calendar, Mail, Notebook, Trello, Slack, Github, Database, Layers } from "lucide-react";

const items = [
  { icon: Calendar, name: "Calendar" },
  { icon: Mail, name: "Email" },
  { icon: Notebook, name: "Notes" },
  { icon: Layers, name: "CRM" },
  { icon: Database, name: "HRIS" },
  { icon: Slack, name: "Slack" },
  { icon: Github, name: "GitHub" },
  { icon: Trello, name: "Trello" },
];

export default function Integrations() {
  return (
    <section id="integrations" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-white">Integrates with your stack</h2>
          <p className="mt-2 text-white/60">Connect the tools you already use. Aether learns your patterns and acts accordingly.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {items.map((it) => (
            <div key={it.name} className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center gap-3 text-white/80">
              <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                <it.icon className="h-4 w-4" />
              </div>
              <span className="text-sm">{it.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
