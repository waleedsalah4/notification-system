import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { TToast } from '@/types';

export const useToastStore = defineStore('toaster', () => {
  const records = ref<TToast[]>([]);
  function addToast(toast: TToast) {
    records.value.push({
      id: toast.id ?? Date.now().toString(),
      title: toast.title,
      message: toast.message,
      type: toast.type,
      delayAppearance: toast.delayAppearance ?? false,
      onCloseToast: toast.onCloseToast,
    });
  }
  function removeToast(id?: string) {
    records.value = records.value.filter((toast) => toast.id !== id);
  }
  function stopDelayAppearance(id: string) {
    const toast = records.value.find((t) => t.id === id);
    if (toast) toast.delayAppearance = false;
  }

  return { records, addToast, removeToast, stopDelayAppearance };
});
