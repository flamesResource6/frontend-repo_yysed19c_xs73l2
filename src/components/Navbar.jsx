import { Menu, Phone } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 ring-1 ring-white/10 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold">SW</span>
          </div>
          <div>
            <div className="text-white font-semibold tracking-tight leading-none">SkyWave</div>
            <div className="text-xs text-blue-200/80 leading-none">Fiber Internet</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#plans" className="text-blue-200 hover:text-white transition">Plans</a>
          <a href="#features" className="text-blue-200 hover:text-white transition">Features</a>
          <a href="#coverage" className="text-blue-200 hover:text-white transition">Coverage</a>
          <a href="#support" className="text-blue-200 hover:text-white transition">Support</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+18001234567" className="hidden sm:flex items-center gap-2 text-blue-200 hover:text-white transition">
            <Phone size={18} />
            <span className="text-sm">1-800-123-4567</span>
          </a>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:from-blue-500 hover:to-indigo-500 transition">
            <span>Get Started</span>
          </button>
          <button className="md:hidden text-blue-200 hover:text-white" aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
