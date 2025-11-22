import { Menu, Bot, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 ring-1 ring-white/20 shadow-[0_0_30px_rgba(251,146,60,0.35)] flex items-center justify-center">
              <Bot className="h-5 w-5 text-black" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-tight">Aether</div>
              <div className="text-xs text-white/50">Autonomous Orchestrated Worker</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#workflows" className="hover:text-white transition">Workflows</a>
            <a href="#integrations" className="hover:text-white transition">Integrations</a>
            <div className="inline-flex items-center gap-1 hover:text-white cursor-pointer">
              Resources <ChevronDown className="h-4 w-4" />
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 hover:border-white/20 transition">
              <Search className="h-4 w-4" />
              <span className="hidden md:block">Search</span>
              <kbd className="ml-2 rounded bg-white/10 px-1.5 text-xs text-white/60">⌘K</kbd>
            </div>
            <a href="#cta" className="rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-black font-medium px-3 sm:px-4 py-2 ring-1 ring-white/20 shadow-[0_8px_30px_rgba(251,146,60,0.35)] hover:shadow-[0_8px_40px_rgba(251,146,60,0.5)] transition">Get started</a>
            <button className="md:hidden p-2 rounded-lg border border-white/10" onClick={() => setOpen(v=>!v)}>
              <Menu className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 text-white/80">
            <div className="grid gap-2">
              <a href="#features" className="rounded-lg px-3 py-2 hover:bg-white/5">Features</a>
              <a href="#workflows" className="rounded-lg px-3 py-2 hover:bg-white/5">Workflows</a>
              <a href="#integrations" className="rounded-lg px-3 py-2 hover:bg-white/5">Integrations</a>
              <a href="#cta" className="rounded-lg px-3 py-2 hover:bg-white/5">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
