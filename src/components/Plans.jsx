const plans = [
  {
    name: "Basic",
    price: 39,
    speed: "200 Mbps",
    features: ["Unlimited data", "Wi‑Fi 6 router", "Standard support"],
    highlight: false,
  },
  {
    name: "Fiber 500",
    price: 59,
    speed: "500 Mbps",
    features: ["Unlimited data", "Wi‑Fi 6 router", "Priority support"],
    highlight: true,
  },
  {
    name: "Gigabit",
    price: 89,
    speed: "1 Gbps",
    features: ["Unlimited data", "Wi‑Fi 6E router", "Premium support"],
    highlight: false,
  },
];

function Plans() {
  return (
    <section id="plans" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-blue-200/90">No contracts. No hidden fees. Upgrade anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5 hover:bg-white/10 transition ${
                plan.highlight ? "ring-1 ring-blue-500/40" : ""
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold">{plan.name}</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">${plan.price}<span className="text-sm font-normal text-blue-200">/mo</span></div>
                  <div className="text-blue-300/80 text-sm">{plan.speed}</div>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-blue-200/90">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`mt-6 w-full rounded-xl px-4 py-2 font-medium shadow-lg transition ${
                plan.highlight
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-600/30 hover:from-blue-500 hover:to-indigo-500"
                  : "border border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;