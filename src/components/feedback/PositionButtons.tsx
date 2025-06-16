import { useToastStore } from "@/store/toastStore";
import { positions, toastsData } from "@/constants";
import { cn } from "@/lib/utils";
import type { TPosition } from "@/types/toast.types";

interface Props {
  handlePositionChange: (position: TPosition) => void;
  position: TPosition;
}
function PositionButtons({ handlePositionChange, position }: Props) {
  const { addToast } = useToastStore();

  const handleAddToast = () => {
    addToast(toastsData.info);
  };
  const onPositionChange = (pos: TPosition) => {
    handlePositionChange(pos);
    handleAddToast();
  };
  return (
    // <div className="w-full rounded-xl border border-gray-700 bg-[#111317] p-6 text-white shadow-lg">

    <div className="flex w-full flex-wrap items-center justify-start gap-2">
      {positions.map((pos) => (
        <button
          key={pos}
          onClick={() => onPositionChange(pos)}
          className={cn(
            "cursor-pointer rounded px-3 py-2 text-sm font-medium capitalize transition",
            position === pos
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          )}
        >
          {pos.replace("-", " ")}
        </button>
      ))}
    </div>
    // </div>
  );
}

export default PositionButtons;
