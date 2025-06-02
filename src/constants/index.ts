import type { TPosition, TToast, ToastVariant } from "@/types/toast.types";

type keyValue = ToastVariant | "delay";

export const toastsData: Record<keyValue, TToast> = {
  primary: {
    type: "primary",
    title: "Primary title",
    message: "Primary Message",
    delayAppearance: false,
  },
  secondary: {
    type: "secondary",
    message: "Secondary message",
    delayAppearance: false,
  },
  success: {
    type: "success",
    title: "Success",
    message: "Success message",
    delayAppearance: false,
  },
  error: {
    type: "error",
    title: "Error",
    message: "Error message",
    delayAppearance: false,
  },
  warning: {
    type: "warning",
    // title: "Warning",
    message: "Lorem ipsum dolor sit amet",
    delayAppearance: false,
  },
  info: {
    type: "info",
    // title: "add to card",
    message: "Lorem ipsum dolor sit amet",
    delayAppearance: false,
  },
  light: {
    type: "light",
    message: "Lorem ipsum dolor sit amet",
    delayAppearance: false,
  },
  dark: {
    type: "dark",
    message: "Lorem ipsum dolor sit amet",
    delayAppearance: false,
  },
  delay: {
    type: "info",
    message: "this shows after short time",
    delayAppearance: true,
  },
};

export const positions: TPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];
