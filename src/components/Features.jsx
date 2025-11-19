import { Shield, Wifi, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Gigabit Speeds",
    desc: "Up to 1 Gbps symmetrical upload and download speeds for seamless streaming and work-from-home.",
  },
  {
    icon: Zap,
    title: "Low Latency",
    desc: "Optimized backbone delivers ultra-low ping for gaming and video calls.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    desc: "99.99% network uptime with enterprise-grade security and DDoS protection.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our expert team is always here to help via chat, phone, or email.",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Built for speed and reliability</h2>
          <p className="mt-3 text-blue-200/90">Everything your home or business needs to stay connected.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-blue-200/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;