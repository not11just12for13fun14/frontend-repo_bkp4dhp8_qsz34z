import { motion } from "framer-motion";

const steps = [
  {
    label: "Sense",
    chips: ["Calendar signals", "Email threads", "CRM updates"],
  },
  {
    label: "Plan",
    chips: ["Intent extraction", "Tool selection", "Risk checks"],
  },
  {
    label: "Act",
    chips: ["Create event", "Draft response", "Update record"],
  },
  {
    label: "Adapt",
    chips: ["Retry on error", "Negotiate conflicts", "Escalate when needed"],
  },
];

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

export default function WorkflowDemo() {
  return (
    <section id="workflows" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-white">Observe → Decide → Act</h2>
          <p className="mt-2 text-white/60">Aether continuously senses your workspace, plans the best path, acts safely, and adapts to change.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5"
            >
              <div className="text-white font-medium">{s.label}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
