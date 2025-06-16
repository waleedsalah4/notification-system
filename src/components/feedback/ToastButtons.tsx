import { useToastStore } from "@/store/toastStore";
import { toastsData } from "@/constants";
import type { TToast } from "@/types/toast.types";

function ToastButtons() {
  const { addToast } = useToastStore();
  const handleAddToast = (toast: TToast) => {
    addToast(toast);
  };
  return (
    <div className="flex flex-wrap items-center justify-start gap-4">
      <button
        className="w-28 cursor-pointer rounded-lg border border-[#084298] bg-[#031633] px-3 py-2 text-base font-medium text-[#6ea8fe] capitalize"
        onClick={() => handleAddToast(toastsData.primary)}
      >
        Primary
      </button>
      <button
        className="w-28 cursor-pointer rounded-lg border border-[#41464b] bg-[#161719] px-3 py-2 text-base font-medium text-[#a7acb1] capitalize"
        onClick={() => handleAddToast(toastsData.secondary)}
      >
        Secondary
      </button>
      <button
        className="w-28 cursor-pointer rounded-lg border border-[#0f5132] bg-[#051b11] px-3 py-2 text-base font-medium text-[#75b798] capitalize"
        onClick={() => handleAddToast(toastsData.success)}
      >
        Success
      </button>
      <button
        className="w-28 cursor-pointer rounded-lg border border-[#842029] bg-[#2c0b0e] px-3 py-2 text-base font-medium text-[#ea868f] capitalize"
        onClick={() => handleAddToast(toastsData.error)}
      >
        Error
      </button>
      <button
        className="w-28 cursor-pointer rounded-lg border border-[#997404] bg-[#332701] px-3 py-2 text-base font-medium text-[#ffda6a] capitalize"
        onClick={() => handleAddToast(toastsData.warning)}
      >
        Warning
      </button>
      <button
        className="w-28 cursor-pointer rounded-lg border border-[#087990] bg-[#032830] px-3 py-2 text-base font-medium text-[#6edff6] capitalize"
        onClick={() => handleAddToast(toastsData.info)}
      >
        Info
      </button>
      <button
        className="w-28 cursor-pointer rounded-lg border border-[#495057] bg-[#343a40] px-3 py-2 text-base font-medium text-[#f8f9fa] capitalize"
        onClick={() => handleAddToast(toastsData.light)}
      >
        Light
      </button>
      <button
        className="w-28 cursor-pointer rounded-lg border border-[#343a40] bg-[#1a1d20] px-3 py-2 text-base font-medium text-[#dee2e6] capitalize"
        onClick={() => handleAddToast(toastsData.dark)}
      >
        Dark
      </button>
      <button
        className="w-28 cursor-pointer rounded-lg border border-[#a9abad] bg-[#f8f9fa] px-3 py-2 text-base font-medium text-[#343a40] capitalize"
        onClick={() => handleAddToast(toastsData.delay)}
      >
        Delay
      </button>
    </div>
  );
}

export default ToastButtons;
