import { useState } from "react";
import { ToastList, ToastButtons, PositionButtons, GithubButton, ShowToastButton } from "@/components";
import FeatureHighlights from "@/components/sections/FeatureHighlights";
import PropsTable from "@/components/sections/PropsTable";
import TechStack from "@/components/sections/TechStack";
import FrameworkCards from "@/components/sections/FrameworkCards";
import type { TPosition } from "@/types/toast.types";

function App() {
  const [position, setPosition] = useState<TPosition>("bottom-right");

  return (
    <div className="relative min-h-screen">
      {/* Background decorative orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-48 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute -bottom-48 left-1/3 h-80 w-80 rounded-full bg-cyan-500/8 blur-[100px]" />
      </div>

      <div className="container relative flex flex-col items-center gap-16">
        {/* Hero */}
        <header className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm font-medium text-violet-300">
              React · Angular · Vue 3 · TypeScript
            </span>
          </div>

          <h1 className="gradient-text text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
            Toast Notifications
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-gray-400">
            A fully customizable notification system implemented across{" "}
            <span className="font-semibold text-white">3 frameworks</span> and{" "}
            <span className="font-semibold text-white">5 branches</span> — with built-in
            animations, 6 positions, auto-dismiss, and 8 beautiful variants.
          </p>

          <div className="flex items-center gap-3">
            <ShowToastButton />
            <GithubButton />
          </div>
        </header>

        {/* Divider */}
        <div className="w-full">
          <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Feature highlights */}
        <FeatureHighlights />

        {/* Framework implementations */}
        <FrameworkCards />

        {/* Main interactive sections */}
        <main className="w-full space-y-6">
          {/* Toast types */}
          <section className="glass-card p-8">
            <div className="mb-6">
              <div className="mb-1 flex items-center gap-3">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Variants</span>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
              </div>
              <h2 className="mt-3 text-xl font-bold text-white">Toast Types</h2>
              <p className="mt-1.5 text-sm text-gray-400">
                8 distinct variants — each with its own icon, color, and personality.
              </p>
            </div>
            <ToastButtons />
          </section>

          {/* Position picker */}
          <section className="glass-card p-8">
            <div className="mb-6">
              <div className="mb-1 flex items-center gap-3">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Positioning</span>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
              </div>
              <h2 className="mt-3 text-xl font-bold text-white">Smart Positioning</h2>
              <p className="mt-1.5 text-sm text-gray-400">
                Place toasts in any of 6 corners or centers. Swipe direction adapts automatically.
              </p>
            </div>
            <PositionButtons position={position} handlePositionChange={setPosition} />
            <pre className="mt-6 overflow-auto rounded-xl border border-white/8 bg-black/50 p-4 text-start text-sm text-emerald-300">
              <code>{`<ToastList position="${position}" />`}</code>
            </pre>
          </section>

          {/* Props table */}
          <PropsTable />
        </main>

        {/* Tech stack */}
        <TechStack />

        <ToastList position={position} />
      </div>
    </div>
  );
}

export default App;