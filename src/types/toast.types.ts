import { toastersValues } from "@/components/feedback/toast/ToastItem";

export type ToastVariant = keyof typeof toastersValues;

export type TToast = {
  id: string;
  type: ToastVariant;
  title?: string;
  message: string;
};
