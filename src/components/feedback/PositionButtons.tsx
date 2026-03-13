import { useAppDispatch } from "@/store";
import { addToast } from "@/store/toasts/toastsSlice";
import { positions, toastsData } from "@/constants";
import { cn } from "@/lib/utils";
import type { TPosition } from "@/types/toast.types";

const dotAlign: Record<TPosition, string> = {
  "top-left": "items-start justify-start",
  "top-center": "items-start justify-center",
  "top-right": "items-start justify-end",
  "bottom-left": "items-end justify-start",
  "bottom-center": "items-end justify-center",
  "bottom-right": "items-end justify-end",
};

interface Props {
  handlePositionChange: (position: TPosition) => void;
  position: TPosition;
}

function PositionButtons({ handlePositionChange, position }: Props) {
  const dispatch = useAppDispatch();

  const onPositionChange = (pos: TPosition) => {
    handlePositionChange(pos);
    dispatch(addToast({ ...toastsData.info, title: "Position changed", message: `Now showing at ${pos}` }));
  };

  return (
    <div className="flex flex-wrap items-center gap-8">
      {/* Visual grid picker */}
      <div className="relative grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-black/30 p-3">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-white/3 to-transparent" />
        {positions.map((pos) => (
          <button
            key={pos}
            title={pos}
            aria-label={pos}
            aria-pressed={position === pos}
            className={cn(
              "relative flex h-14 w-16 cursor-pointer rounded-xl border p-2 transition-all duration-200",
              position === pos
                ? "border-blue-500/60 bg-blue-500/15 shadow-[0_0_14px_rgba(59,130,246,0.35)]"
                : "border-white/8 bg-white/4 hover:border-white/20 hover:bg-white/8"
            )}
            onClick={() => onPositionChange(pos)}
          >
            <span className={cn("flex h-full w-full", dotAlign[pos])}>
              <span
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-200",
                  position === pos
                    ? "bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.9)]"
                    : "bg-gray-600"
                )}
              />
            </span>
          </button>
        ))}
      </div>

      {/* Active label */}
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Active position</p>
        <p className="text-base font-semibold capitalize text-white">
          {position.replace("-", " ")}
        </p>
        <p className="text-xs text-gray-500">Click a cell to move toasts</p>
      </div>
    </div>
  );
}

export default PositionButtons;