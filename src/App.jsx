import Header from './components/Header'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import WorkflowDemo from './components/WorkflowDemo'
import Integrations from './components/Integrations'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-white/90">
      {/* Subtle noise + vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.06),transparent)]" />

      <Header />
      <Hero />
      <FeatureGrid />
      <WorkflowDemo />
      <Integrations />
      <CTA />

      <footer className="relative border-t border-white/10 py-10 text-center text-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Aether • Designed for intelligence at work
        </div>
      </footer>
    </div>
  )
}

export default App
