const stack = [
  {
    name: "React",
    color: "#61dafb",
    url: "https://react.dev",
    abbr: "R",
    icon: null,
  },
  { name: "Redux Toolkit", color: "#764abc", url: "https://redux-toolkit.js.org", abbr: "RTK", icon: null },
  { name: "TypeScript", color: "#3178c6", url: "https://www.typescriptlang.org", abbr: "TS", icon: null },
  {
    name: "Tailwind CSS",
    color: "#38bdf8",
    url: "https://tailwindcss.com",
    abbr: "T",
    icon: "M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.27 10.8 14.42 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.73 7.2 14.58 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.27 16.8 9.42 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.73 13.2 9.58 12 7 12z",
  },
  {
    name: "Vite",
    color: "#9f8eff",
    url: "https://vitejs.dev",
    abbr: "V",
    icon: "M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z",
  },
  { name: "motion/react", color: "#e2e8f0", url: "https://motion.dev/docs/react", abbr: "M", icon: null },
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
            {tech.icon ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0">
                <path d={tech.icon} />
              </svg>
            ) : (
              <span
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-black"
                style={{ background: `${tech.color}25` }}
              >
                {tech.abbr}
              </span>
            )}
            {tech.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
