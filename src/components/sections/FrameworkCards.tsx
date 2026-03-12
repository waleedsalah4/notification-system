const frameworks = [
  {
    name: "React",
    branch: "main",
    color: "#61dafb",
    isCurrentBranch: true,
    stateLib: "Redux Toolkit",
    description: "Classic React with hooks, Redux Toolkit for state management, and motion/react for animations.",
    tags: ["React 19", "Redux", "motion/react", "TypeScript"],
    icon: "M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM12 2C6.477 2 2 6.484 2 12.017c0 .07.001.14.002.21C4.233 9.966 7.9 8.5 12 8.5s7.767 1.466 9.998 3.727c.001-.07.002-.14.002-.21C22 6.484 17.523 2 12 2ZM2.146 13.617C3.68 16.835 7.557 19 12 19s8.32-2.165 9.854-5.383A13.7 13.7 0 0 1 12 15a13.7 13.7 0 0 1-9.854-1.383Z",
  },
  {
    name: "React + Zustand",
    branch: "toast-with-zustand",
    color: "#f97316",
    isCurrentBranch: false,
    stateLib: "Zustand",
    description: "Lightweight alternative using Zustand for minimal, hook-based global state without boilerplate.",
    tags: ["React 19", "Zustand", "motion/react", "TypeScript"],
    icon: null,
    abbr: "Z",
  },
  {
    name: "React + Context",
    branch: "toast-with-context-api",
    color: "#a78bfa",
    isCurrentBranch: false,
    stateLib: "Context API",
    description: "Zero-dependency state management using React's built-in Context API and useReducer.",
    tags: ["React 19", "Context API", "motion/react", "TypeScript"],
    icon: null,
    abbr: "C",
  },
  {
    name: "Angular",
    branch: "toasts-in-angular",
    color: "#dd1b16",
    isCurrentBranch: false,
    stateLib: "Angular Signals",
    description: "Angular 17+ implementation using standalone components, services, and reactive Signals.",
    tags: ["Angular 17+", "Signals", "Standalone", "TypeScript"],
    icon: "M12 2L2 6.5l1.5 10.5L12 22l8.5-5L22 6.5 12 2zm0 2.18l6.77 2.97-1.2 8.4L12 18.6l-5.57-3.05-1.2-8.4L12 4.18z",
  },
  {
    name: "Vue 3",
    branch: "toasts-in-vue",
    color: "#42b883",
    isCurrentBranch: false,
    stateLib: "Pinia",
    description: "Vue 3 Composition API with Pinia for state management and motion-v for fluid animations.",
    tags: ["Vue 3", "Pinia", "motion-v", "TypeScript"],
    icon: "M2 3h3.5L12 15l6.5-12H22L12 21 2 3zm4.5 0h3L12 9l2.5-6h3L12 15 6.5 3z",
  },
];

function FrameworkCards() {
  return (
    <section className="glass-card w-full p-8">
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-3">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Implementations</span>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
        </div>
        <h2 className="mt-3 text-xl font-bold text-white">Available Versions</h2>
        <p className="mt-1.5 text-sm text-gray-400">
          Same toast system, implemented across 3 frameworks and 5 branches. Each explores a different approach to state management.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {frameworks.map((fw) => (
          <a
            key={fw.branch}
            href={`https://github.com/waleedsalah4/notification-system/tree/${fw.branch}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-3 overflow-hidden rounded-xl border p-5 transition-all duration-200 hover:scale-[1.02]"
            style={{
              borderColor: `${fw.color}25`,
              background: `radial-gradient(ellipse at 0% 0%, ${fw.color}08 0%, transparent 60%), rgba(0,0,0,0.3)`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${fw.color}50`)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${fw.color}25`)}
          >
            {/* Current branch badge */}
            {fw.isCurrentBranch && (
              <span className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Live
              </span>
            )}

            {/* Icon + name */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{ background: `${fw.color}18`, boxShadow: `0 0 12px ${fw.color}30` }}
              >
                {fw.icon ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fw.color} className="size-5">
                    <path d={fw.icon} />
                  </svg>
                ) : (
                  <span className="text-xs font-black" style={{ color: fw.color }}>{fw.abbr}</span>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{fw.name}</p>
                <p className="text-xs text-gray-500">{fw.stateLib}</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-gray-400">{fw.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {fw.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                  style={{ background: `${fw.color}12`, color: fw.color }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Branch link */}
            <div className="mt-auto flex items-center gap-1 text-xs text-gray-600 transition-colors group-hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                <path fillRule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.28.53l2.47-2.47h6.75a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75H7.5Z" clipRule="evenodd" />
              </svg>
              {fw.branch}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default FrameworkCards;