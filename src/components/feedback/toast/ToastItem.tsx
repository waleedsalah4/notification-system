import { useCallback, useEffect, useState } from "react";
import { useToastStore } from "@/store/toastStore";
import { cn } from "@/lib/utils";
import { CloseIcon } from "@/components/icons/icons";
import type { TToast } from "@/types/toast.types";

export const toastersValues = {
  primary: "border-[#084298] bg-[#031633] text-[#6ea8fe]",
  secondary: "border-[#41464b] bg-[#161719] text-[#a7acb1]",
  success: "border-[#0f5132] bg-[#051b11] text-[#75b798]",
  error: "border-[#842029] bg-[#2c0b0e]  text-[#ea868f]",
  warning: "border-[#997404] bg-[#332701]  text-[#ffda6a]",
  info: "border-[#087990] bg-[#032830]  text-[#6edff6]",
  light: "border-[#495057] bg-[#343a40]  text-[#f8f9fa]",
  dark: "border-[#343a40] bg-[#1a1d20]  text-[#dee2e6]",
};

interface ToastItemProps {
  toast: TToast;
}

function ToastItem({ toast }: ToastItemProps) {
  const variantClass = toastersValues[toast.type];
  const { removeToast, stopDelayAppearance } = useToastStore();

  const [progressBarIndicator, setProgressBarIndicator] = useState(0);
  const [pauseProgressBarIndicator, setPauseProgressBarIndicator] =
    useState(false);

  const totalWidth = 100; // The progress bar width is 400 pixels, representing 100% completion.
  const duration = 4000; // Total duration in milliseconds
  const intervalTime = duration / totalWidth; // Interval time in milliseconds
  const delayAnimationDuration = duration / 2;
  const maxProgress = 100; // 100% completion

  // remove toast handler
  const closeToastHandler = useCallback(() => {
    removeToast(toast.id);
    toast.onCloseToast?.();
  }, [toast.id, toast.onCloseToast]);

  //handle mouse hover over
  const handleMouseEvent = () => {
    setPauseProgressBarIndicator((prevState) => !prevState);
  };

  // progress bar indicator increment
  useEffect(() => {
    // if delay true stop progress bar
    if (toast.delayAppearance) return;

    const timerId = setInterval(() => {
      setProgressBarIndicator((prevState) => {
        //if pause true stop incrementing progress
        if (!pauseProgressBarIndicator)
          if (prevState < maxProgress) {
            return prevState + 1; //increase 1 pixel
          }
        return prevState;
      });
    }, intervalTime);

    return () => clearInterval(timerId);
  }, [intervalTime, pauseProgressBarIndicator, toast.delayAppearance]);

  //close toast when progress bar is completed
  useEffect(() => {
    if (progressBarIndicator === 100) {
      closeToastHandler();
    }
  }, [progressBarIndicator, closeToastHandler]);

  // handle delay animation
  useEffect(() => {
    if (toast.delayAppearance) {
      const myTimeout = setTimeout(() => {
        stopDelayAppearance(toast.id || "");
      }, 1000);

      return () => clearTimeout(myTimeout);
    }
  }, [toast.delayAppearance, delayAnimationDuration, toast.id]);

  // if delay true, return nothing
  if (toast.delayAppearance) return "";

  return (
    <div
      className={cn(
        "relative mb-4 overflow-hidden rounded-md border p-4 text-start",
        variantClass
      )}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <h5 className="text-base capitalize">{toast.title}</h5>
      <p className="text-[15px] capitalize">{toast.message}</p>
      <button
        type="button"
        aria-label="Close"
        className="absolute top-2 right-2 cursor-pointer text-white opacity-50 hover:opacity-75 focus:opacity-100"
        onClick={() => removeToast(toast.id)}
      >
        <CloseIcon className="size-2" />
      </button>
      <span
        className="absolute bottom-0 left-0 inline-block h-1 bg-current align-middle opacity-50"
        style={{
          width: `${progressBarIndicator}%`,
          transition: `width ${intervalTime}ms linear`,
        }}
      >
        placeholder
      </span>
    </div>
  );
}

export default ToastItem;
