const features = [
  { icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", color: "#a78bfa", title: "Auto-dismiss", desc: "Toasts vanish after 4s with a glowing progress bar." },
  { icon: "M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59", color: "#67e8f9", title: "Pause on hover", desc: "Mouse over a toast to freeze its timer instantly." },
  { icon: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z", color: "#6ee7b7", title: "6 Positions", desc: "Top, bottom, left, right, center — your call." },
  { icon: "M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z", color: "#fbbf24", title: "Delay appearance", desc: "Show toasts after a short delay for smooth UX." },
];

function FeatureHighlights() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
      {features.map((feat) => (
        <div key={feat.title} className="glass-card flex flex-col gap-3 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${feat.color}18`, boxShadow: `0 0 14px ${feat.color}35` }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={feat.color} className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{feat.title}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{feat.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureHighlights;