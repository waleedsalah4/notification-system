import { useToasts } from "@/context/ToastContext";
import { toastsData } from "@/constants";
import type { TToast } from "@/types/toast.types";

export const ShowToastButton = () => {
  const { addToast } = useToasts();

  const handleAddToast = (toast: TToast) => {
    addToast(toast);
  };
  return (
    <button
      onClick={() => handleAddToast(toastsData.primary)}
      className="w-36 rounded-lg bg-[#031633] px-4 py-2 text-base text-white transition hover:bg-[#161c27]"
    >
      Show Toast
    </button>
  );
};

export const GithubButton = () => {
  return (
    <a
      href="https://github.com/waleedsalah4/notification-system"
      target="_blank"
      rel="noopener noreferrer"
      className="w-36 rounded-lg border-[#41464b] bg-[#161719] px-4 py-2 text-base text-white capitalize shadow-lg transition hover:bg-white/10"
    >
      GitHub
    </a>
  );
};
