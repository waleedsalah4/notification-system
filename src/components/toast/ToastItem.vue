<script setup lang="ts">
import { useToastStore } from '@/stores/toaster';
import type { TToast } from '@/types';
import { ref, watch, computed } from 'vue';
import CloseIcon from '../icons/CloseIcon.vue';
import ToastIcon from '../icons/ToastIcon.vue';
import { toasterAccentColors, intervalTime, delayAnimationDuration, maxProgress } from '@/constants';

const props = defineProps<{ toast: TToast }>();

const accentColor = computed(() => toasterAccentColors[props.toast.type]);
const store = useToastStore();
const progressBarIndicator = ref(0);
const pauseProgressBarIndicator = ref(false);

function closeToastHandler() {
  store.removeToast(props.toast.id);
  props.toast.onCloseToast?.();
}
function handleMouseEnter() {
  pauseProgressBarIndicator.value = true;
}
function handleMouseLeave() {
  pauseProgressBarIndicator.value = false;
}

watch(
  [pauseProgressBarIndicator, () => props.toast.delayAppearance],
  (_, __, onCleanup) => {
    if (props.toast.delayAppearance) return;
    const timerId = setInterval(() => {
      if (!pauseProgressBarIndicator.value)
        if (progressBarIndicator.value < maxProgress) {
          progressBarIndicator.value += 1;
        }
    }, intervalTime);
    onCleanup(() => clearInterval(timerId));
  },
  { immediate: true },
);

watch(progressBarIndicator, () => {
  if (progressBarIndicator.value === 100) {
    closeToastHandler();
  }
});

watch(
  [() => props.toast.delayAppearance, () => props.toast.id],
  (_, __, onCleanup) => {
    if (props.toast.delayAppearance) {
      const myTimeout = setTimeout(() => {
        store.stopDelayAppearance(props.toast.id || '');
      }, delayAnimationDuration);
      onCleanup(() => clearTimeout(myTimeout));
    }
  },
  { immediate: true },
);
</script>

<template>
  <div
    v-if="!toast.delayAppearance"
    class="relative mb-3 flex items-start gap-3 overflow-hidden rounded-2xl border border-white/8 p-4 text-start backdrop-blur-xl"
    :style="{
      background: `radial-gradient(ellipse at 0% 50%, ${accentColor}18 0%, transparent 60%), rgba(0, 0, 0, 0.65)`,
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Glowing icon badge -->
    <div
      class="mt-0.5 shrink-0 rounded-xl p-2"
      :style="{
        background: `${accentColor}20`,
        boxShadow: `0 0 14px ${accentColor}40`,
        color: accentColor,
      }"
    >
      <ToastIcon :type="toast.type" />
    </div>

    <!-- Content -->
    <div class="min-w-0 flex-1">
      <h5 v-if="toast.title" class="text-sm font-semibold capitalize text-white">
        {{ toast.title }}
      </h5>
      <p class="text-sm capitalize text-gray-300">{{ toast.message }}</p>
    </div>

    <!-- Close button -->
    <button
      type="button"
      aria-label="Close"
      class="shrink-0 rounded-lg p-1 text-gray-500 transition-all hover:bg-white/10 hover:text-white"
      @click="store.removeToast(toast.id)"
    >
      <CloseIcon />
    </button>

    <!-- Progress bar -->
    <span
      class="absolute bottom-0 left-0 h-0.5 rounded-full"
      :style="{
        width: `${progressBarIndicator}%`,
        background: accentColor,
        boxShadow: `0 0 8px ${accentColor}80`,
        transition: `width ${intervalTime}ms linear`,
      }"
    />
  </div>
</template>
