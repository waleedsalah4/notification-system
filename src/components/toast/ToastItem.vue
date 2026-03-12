<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useToastStore } from '@/stores/toaster';
import type { ToastVariant, TToast } from '@/types';
import { ref, watch, computed } from 'vue';
import CloseIcon from '../icons/CloseIcon.vue';
import { toastersValues, intervalTime, delayAnimationDuration, maxProgress } from '@/constants';

const props = defineProps<{ toast: TToast }>();

const variantClass = computed(() => toastersValues[props.toast.type]);
const store = useToastStore();
const progressBarIndicator = ref(0);
const pauseProgressBarIndicator = ref(false);

function closeToastHandler() {
  store.removeToast(props.toast.id);
  props.toast.onCloseToast?.();
}
//handle mouse hover over
function handleMouseEnter() {
  pauseProgressBarIndicator.value = true;
}
function handleMouseLeave() {
  pauseProgressBarIndicator.value = false;
}

// progress bar indicator increment
watch(
  [pauseProgressBarIndicator, () => props.toast.delayAppearance],
  (_, __, onCleanup) => {
    // if delay true stop progress bar
    if (props.toast.delayAppearance) return;
    const timerId = setInterval(() => {
      //if pause true stop incrementing progress
      if (!pauseProgressBarIndicator.value)
        if (progressBarIndicator.value < maxProgress) {
          progressBarIndicator.value += 1; //increase 1 pixel
        }
    }, intervalTime);
    onCleanup(() => clearInterval(timerId));
  },
  { immediate: true },
);

//close toast when progress bar is completed
watch(progressBarIndicator, () => {
  if (progressBarIndicator.value === 100) {
    closeToastHandler();
  }
});

// handle delay animation
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
    :class="cn('relative mb-4 overflow-hidden rounded-md border p-4 text-start', variantClass)"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-if="!toast.delayAppearance"
  >
    <h5 class="text-base capitalize">{{ toast.title }}</h5>
    <p class="text-[15px] capitalize">{{ toast.message }}</p>

    <button
      type="button"
      aria-label="Close"
      class="absolute top-2 right-2 cursor-pointer text-white opacity-50 hover:opacity-75 focus:opacity-100"
      @click="
        {
          store.removeToast(toast.id);
        }
      "
    >
      <CloseIcon />
    </button>
    <span
      class="absolute bottom-0 left-0 inline-block h-1 bg-current align-middle opacity-50"
      :style="{
        width: `${progressBarIndicator}%`,
        transition: `width ${intervalTime}ms linear`,
      }"
    >
      placeholder
    </span>
  </div>
</template>
