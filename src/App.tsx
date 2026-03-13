import { useState } from "react";
import {
  ToastList,
  ToastButtons,
  PositionButtons,
  GithubButton,
  ShowToastButton,
  FeatureHighlights,
  PropsTable,
  TechStack,
  FrameworkCards,
} from "@/components";

import type { TPosition } from "@/types/toast.types";

function App() {
  const [position, setPosition] = useState<TPosition>("bottom-right");

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[10%] top-[15%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[5%] h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[40%] h-[450px] w-[450px] rounded-full bg-cyan-500/6 blur-[110px]" />
      </div>

      <main className="container flex flex-col gap-12">
        {/* Hero */}
        <header className="flex flex-col items-center gap-6 pt-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            React · Context API · TypeScript
          </div>

          <div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
              <span className="gradient-text">Notification</span> Toast
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-400">
              A beautiful, accessible toast notification system built with React Context API, TypeScript, and Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <ShowToastButton />
            <GithubButton />
          </div>
        </header>

        {/* Toast variants */}
        <section className="glass-card p-8">
          <div className="mb-6">
            <div className="mb-1 flex items-center gap-3">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Variants</span>
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
            </div>
            <h2 className="mt-3 text-xl font-bold text-white">Toast Types</h2>
            <p className="mt-1.5 text-sm text-gray-400">
              Eight semantic variants — each with its own ambient glow and icon.
            </p>
          </div>
          <ToastButtons />
        </section>

        {/* Position picker */}
        <section className="glass-card p-8">
          <div className="mb-6">
            <div className="mb-1 flex items-center gap-3">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Layout</span>
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
            </div>
            <h2 className="mt-3 text-xl font-bold text-white">Position</h2>
            <p className="mt-1.5 text-sm text-gray-400">
              Six placement options — pick a corner or edge to anchor your toasts.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <PositionButtons
              position={position}
              handlePositionChange={(pos) => setPosition(pos)}
            />
            <pre className="overflow-auto rounded-xl border border-white/6 bg-black/40 p-4 text-left text-sm text-emerald-300">
              <code>{`<ToastList position="${position}" />`}</code>
            </pre>
          </div>
        </section>

        <FeatureHighlights />
        <PropsTable />
        <TechStack />
        <FrameworkCards />

        <footer className="pb-10 text-center text-xs text-gray-600">
          Built with React Context API · TypeScript · Tailwind CSS
        </footer>
      </main>

      <ToastList position={position} />
    </div>
  );
}

export default App;