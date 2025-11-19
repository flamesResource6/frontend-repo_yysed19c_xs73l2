import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Ultra‑fast fiber now in your area
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Lightning‑fast Internet for home and business
          </h1>
          <p className="mt-4 text-blue-200/90 text-lg">
            Experience low latency, symmetrical speeds, and 99.99% uptime with SkyWave Fiber. Stream, game, and work without limits.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#plans" className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white font-medium shadow-lg shadow-blue-600/30 hover:from-blue-500 hover:to-indigo-500 transition">
              View Plans
            </a>
            <a href="#coverage" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
              Check Coverage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
