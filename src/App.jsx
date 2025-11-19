import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Plans from './components/Plans'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background gradients for blue corporate vibe */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.25),transparent_60%)] blur-2xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-[800px] rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.25),transparent_60%)] blur-2xl"></div>
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Plans />

      {/* CTA / Footer */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent"></div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-8 sm:p-10 backdrop-blur">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready for better internet?</h3>
                <p className="mt-2 text-blue-200/90">Switch to reliable, lightning‑fast fiber with transparent pricing and 24/7 support.</p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href="#plans" className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white font-medium shadow-lg shadow-blue-600/30 hover:from-blue-500 hover:to-indigo-500 transition">Compare Plans</a>
                <a href="#support" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">Contact Sales</a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-blue-300/70">© {new Date().getFullYear()} SkyWave Communications. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-blue-200/80">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#support" className="hover:text-white">Support</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
