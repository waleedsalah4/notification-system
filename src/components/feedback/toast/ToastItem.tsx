import { useCallback, useEffect, useState } from "react";
import { useToastStore } from "@/store/toastStore";
import { CloseIcon, ToastIcon } from "@/components/icons/icons";
import { toasterAccentColors } from "@/constants";
import type { TToast } from "@/types/toast.types";

// Kept for ToastVariant type derivation in toast.types.ts
export const toastersValues = {
  primary: "#6ea8fe",
  secondary: "#a7acb1",
  success: "#75b798",
  error: "#ea868f",
  warning: "#ffda6a",
  info: "#6edff6",
  light: "#f8f9fa",
  dark: "#dee2e6",
};

interface ToastItemProps {
  toast: TToast;
}

function ToastItem({ toast }: ToastItemProps) {
  const accentColor = toasterAccentColors[toast.type];
  const { removeToast, stopDelayAppearance } = useToastStore();

  const [progressBarIndicator, setProgressBarIndicator] = useState(0);
  const [pauseProgressBarIndicator, setPauseProgressBarIndicator] = useState(false);

  const totalWidth = 100;
  const duration = 4000;
  const intervalTime = duration / totalWidth;
  const delayAnimationDuration = duration / 2;
  const maxProgress = 100;

  const closeToastHandler = useCallback(() => {
    removeToast(toast.id);
    toast.onCloseToast?.();
  }, [toast.id, toast.onCloseToast, removeToast]);

  const handleMouseEvent = () => setPauseProgressBarIndicator((prev) => !prev);

  useEffect(() => {
    if (toast.delayAppearance) return;
    const timerId = setInterval(() => {
      setProgressBarIndicator((prev) => {
        if (!pauseProgressBarIndicator && prev < maxProgress) return prev + 1;
        return prev;
      });
    }, intervalTime);
    return () => clearInterval(timerId);
  }, [intervalTime, pauseProgressBarIndicator, toast.delayAppearance]);

  useEffect(() => {
    if (progressBarIndicator === 100) closeToastHandler();
  }, [progressBarIndicator, closeToastHandler]);

  useEffect(() => {
    if (toast.delayAppearance) {
      const myTimeout = setTimeout(() => {
        stopDelayAppearance(toast.id || "");
      }, 1000);
      return () => clearTimeout(myTimeout);
    }
  }, [toast.delayAppearance, delayAnimationDuration, toast.id, stopDelayAppearance]);

  if (toast.delayAppearance) return null;

  return (
    <div
      className="relative mb-3 flex items-start gap-3 overflow-hidden rounded-2xl border border-white/8 p-4 text-start backdrop-blur-xl"
      style={{
        background: `radial-gradient(ellipse at 0% 50%, ${accentColor}18 0%, transparent 60%), rgba(0, 0, 0, 0.65)`,
      }}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      {/* Glowing icon badge */}
      <div
        className="mt-0.5 shrink-0 rounded-xl p-2"
        style={{
          background: `${accentColor}20`,
          boxShadow: `0 0 14px ${accentColor}40`,
          color: accentColor,
        }}
      >
        <ToastIcon type={toast.type} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        {toast.title && (
          <h5 className="text-sm font-semibold capitalize text-white">{toast.title}</h5>
        )}
        <p className="text-sm capitalize text-gray-300">{toast.message}</p>
      </div>

      {/* Close button */}
      <button
        type="button"
        aria-label="Close"
        className="shrink-0 cursor-pointer rounded-lg p-1 text-gray-500 transition-all hover:bg-white/10 hover:text-white"
        onClick={() => removeToast(toast.id)}
      >
        <CloseIcon className="size-2.5" />
      </button>

      {/* Progress bar */}
      <span
        className="absolute bottom-0 left-0 h-0.5 rounded-full"
        style={{
          width: `${progressBarIndicator}%`,
          background: accentColor,
          boxShadow: `0 0 8px ${accentColor}80`,
          transition: `width ${intervalTime}ms linear`,
        }}
      />
    </div>
  );
}

export default ToastItem;