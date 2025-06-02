import { toastersValues } from "@/components/feedback/toast/ToastItem";

export type ToastVariant = keyof typeof toastersValues;
export type TPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type TToast = {
  id?: string;
  type: ToastVariant;
  title?: string;
  message: string;
  delayAppearance?: boolean;
  onCloseToast?: () => void;
};
