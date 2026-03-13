const frameworks = [
  {
    name: "React · Redux",
    description: "Centralized state with Redux Toolkit and typed dispatch.",
    color: "#764abc",
    branch: "main",
    live: false,
  },
  {
    name: "React · Zustand",
    description: "Lightweight bear-powered state with a minimal API.",
    color: "#f97316",
    branch: "toast-with-zustand",
    live: false,
  },
  {
    name: "React · Context API",
    description: "Zero-dependency state sharing via built-in React context.",
    color: "#a78bfa",
    branch: "toast-with-context-api",
    live: true,
  },
  {
    name: "Angular",
    description: "Signals-based reactivity with standalone components.",
    color: "#dd0031",
    branch: "toasts-in-angular",
    live: false,
  },
  {
    name: "Vue 3",
    description: "Composition API with Pinia store and reactive refs.",
    color: "#42b883",
    branch: "toasts-in-vue",
    live: false,
  },
];

function FrameworkCards() {
  return (
    <section className="glass-card p-8">
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-3">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Ecosystem</span>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
        </div>
        <h2 className="mt-3 text-xl font-bold text-white">All Implementations</h2>
        <p className="mt-1.5 text-sm text-gray-400">The same toast system across every major framework and state library.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {frameworks.map((fw) => (
          <div
            key={fw.branch}
            className="group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:scale-[1.02]"
            style={{
              borderColor: `${fw.color}25`,
              background: `radial-gradient(ellipse at 0% 0%, ${fw.color}10 0%, transparent 60%), rgba(255,255,255,0.02)`,
            }}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold" style={{ color: fw.color }}>
                {fw.name}
              </span>
              {fw.live && (
                <span
                  className="flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: `${fw.color}20`, color: fw.color }}
                >
                  <span
                    className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{ background: fw.color }}
                  />
                  Live
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500">{fw.description}</p>
            <div
              className="absolute bottom-0 left-0 h-px w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: `linear-gradient(90deg, transparent, ${fw.color}60, transparent)` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FrameworkCards;