const stack = [
  { name: "React",        color: "#61dafb", url: "https://react.dev",                         abbr: "R"  },
  { name: "Zustand",      color: "#f97316", url: "https://zustand-demo.pmnd.rs",              abbr: "Z"  },
  { name: "TypeScript",   color: "#3178c6", url: "https://www.typescriptlang.org",            abbr: "TS" },
  { name: "Tailwind CSS", color: "#38bdf8", url: "https://tailwindcss.com",                   abbr: "T"  },
  { name: "Vite",         color: "#9f8eff", url: "https://vitejs.dev",                        abbr: "V"  },
  { name: "motion/react", color: "#e2e8f0", url: "https://motion.dev/docs/react",             abbr: "M"  },
];

function TechStack() {
  return (
    <div className="flex w-full flex-col items-center gap-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-600">Built with</p>
      <div className="flex flex-wrap justify-center gap-3">
        {stack.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{ borderColor: `${tech.color}35`, backgroundColor: `${tech.color}0a`, color: tech.color }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 16px ${tech.color}30`)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-black" style={{ background: `${tech.color}25` }}>
              {tech.abbr}
            </span>
            {tech.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default TechStack;