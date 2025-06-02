import { useState } from "react";
import {
  ToastList,
  ToastButtons,
  PositionButtons,
  GithubButton,
  ShowToastButton,
} from "@/components";

import type { TPosition } from "@/types/toast.types";

function App() {
  const [position, setPosition] = useState<TPosition>("bottom-right");

  return (
    <main className="relative container flex min-h-screen flex-col items-center justify-center gap-10">
      <header className="flex flex-col items-center gap-4">
        <h1>Notification Toast</h1>
        <p className="text-lg text-gray-400">A toast component for React.</p>
        <div className="flex items-center gap-4">
          <ShowToastButton />
          <GithubButton />
        </div>
      </header>

      <section className="grid grid-cols-1 items-start gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-start text-lg font-bold">Types</h2>
          <p className="text-start text-base text-gray-300">
            This notification system supports{" "}
            <span className="font-semibold">multiple toast types</span> — each
            styled with its own colors for clarity: Primary, Success, Error,
            Warning, Info, and more.
          </p>
          <ToastButtons />
        </div>
        <div className="mt-8 text-start text-base text-gray-300">
          <p className="">
            You can customize <span className="font-semibold">title</span> and{" "}
            <span className="font-semibold">message</span> content, as well as
            add features like
            <span className="font-semibold"> animation, pause on hover</span>,
            auto-dismiss delay, and more.
          </p>
          <p className="">
            Easily extendable and fully responsive — try triggering different
            toasts using the buttons above.
          </p>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h2 className="mb-4 text-lg font-semibold">Toast Position</h2>
          <p>Swipe direction changes depending on the position.</p>
          <PositionButtons
            position={position}
            handlePositionChange={(position) => setPosition(position)}
          />
          <pre className="w-full overflow-auto rounded-lg bg-gray-900 p-4 text-start text-sm text-green-200">
            <code>{`<ToastList position={${position}} />`}</code>
          </pre>
        </div>
      </section>

      <ToastList position={position} />
    </main>
  );
}

export default App;
