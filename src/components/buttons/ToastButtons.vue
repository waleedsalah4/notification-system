<script setup lang="ts">
import { useToastStore } from '@/stores/toaster';
import { toastsData, toasterAccentColors } from '@/constants';
import type { ToastVariant } from '@/types';
import ToastIcon from '@/components/icons/ToastIcon.vue';

const store = useToastStore();

const variants: { key: ToastVariant | 'delay'; label: string }[] = [
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'success', label: 'Success' },
  { key: 'error', label: 'Error' },
  { key: 'warning', label: 'Warning' },
  { key: 'info', label: 'Info' },
  { key: 'light', label: 'Light' },
  { key: 'dark', label: 'Dark' },
  { key: 'delay', label: 'Delay' },
];

function getAccentColor(key: ToastVariant | 'delay'): string {
  return key === 'delay' ? toasterAccentColors['info'] : toasterAccentColors[key as ToastVariant];
}
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <button
      v-for="v in variants"
      :key="v.key"
      class="group flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium capitalize transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
      :style="{
        borderColor: `${getAccentColor(v.key)}40`,
        backgroundColor: `${getAccentColor(v.key)}0d`,
        color: getAccentColor(v.key),
      }"
      @mouseenter="
        (e: MouseEvent) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = `0 0 18px ${getAccentColor(v.key)}35`;
          el.style.borderColor = `${getAccentColor(v.key)}70`;
        }
      "
      @mouseleave="
        (e: MouseEvent) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = 'none';
          el.style.borderColor = `${getAccentColor(v.key)}40`;
        }
      "
      @click="store.addToast(toastsData[v.key])"
    >
      <!-- Delay icon: clock -->
      <svg
        v-if="v.key === 'delay'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-4 opacity-80 group-hover:opacity-100"
      >
        <path
          fill-rule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
          clip-rule="evenodd"
        />
      </svg>
      <ToastIcon
        v-else
        :type="v.key as ToastVariant"
        class="size-4 opacity-80 group-hover:opacity-100"
      />
      {{ v.label }}
    </button>
  </div>
</template>
