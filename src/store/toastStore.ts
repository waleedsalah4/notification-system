// store/toastStore.ts
import { create } from "zustand";
import type { TToast } from "@/types/toast.types";

interface ToastState {
  records: TToast[];
  addToast: (toast: TToast) => void;
  removeToast: (id?: string) => void;
  stopDelayAppearance: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  records: [],

  addToast: (toast: TToast) =>
    set((state) => ({
      records: [
        ...state.records,
        {
          id: toast.id || new Date().getTime().toString(),
          title: toast.title,
          message: toast.message,
          type: toast.type,
          delayAppearance: toast.delayAppearance || false,
          onCloseToast: toast.onCloseToast,
        },
      ],
    })),

  removeToast: (id?: string) =>
    set((state) => ({
      records: state.records.filter((toast) => toast.id !== id),
    })),

  stopDelayAppearance: (id: string) =>
    set((state) => ({
      records: state.records.map((toast) =>
        toast.id === id ? { ...toast, delayAppearance: false } : toast
      ),
    })),
}));
