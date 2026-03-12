<script setup lang="ts">
import { positions } from '@/constants';
import type { TPosition } from '@/types';

const props = defineProps<{
  position: TPosition;
}>();

const emit = defineEmits<{
  (e: 'update:position', value: TPosition): void;
  (e: 'change'): void;
}>();

function onPositionClick(pos: TPosition) {
  emit('update:position', pos);
  emit('change');
}

// Map position to dot alignment within its cell
const dotAlign: Record<TPosition, string> = {
  'top-left': 'items-start justify-start',
  'top-center': 'items-start justify-center',
  'top-right': 'items-start justify-end',
  'bottom-left': 'items-end justify-start',
  'bottom-center': 'items-end justify-center',
  'bottom-right': 'items-end justify-end',
};
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <!-- Visual grid picker -->
    <div class="relative grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-black/30 p-3">
      <!-- Subtle inner gradient -->
      <div class="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/3 to-transparent" />
      <button
        v-for="pos in positions"
        :key="pos"
        :title="pos"
        :aria-label="pos"
        :aria-pressed="position === pos"
        class="relative flex h-14 w-16 cursor-pointer rounded-xl border p-2 transition-all duration-200"
        :class="
          position === pos
            ? 'border-blue-500/60 bg-blue-500/15 shadow-[0_0_14px_rgba(59,130,246,0.35)]'
            : 'border-white/8 bg-white/4 hover:border-white/20 hover:bg-white/8'
        "
        @click="onPositionClick(pos)"
      >
        <!-- Dot aligned to the position corner/center -->
        <span
          class="flex h-full w-full"
          :class="dotAlign[pos]"
        >
          <span
            class="h-2 w-2 rounded-full transition-all duration-200"
            :class="
              position === pos
                ? 'bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.9)]'
                : 'bg-gray-600'
            "
          />
        </span>
      </button>
    </div>

    <!-- Active label -->
    <div class="space-y-1">
      <p class="text-xs font-semibold uppercase tracking-widest text-gray-500">Active position</p>
      <p class="text-base font-semibold capitalize text-white">
        {{ position.replace('-', ' ') }}
      </p>
      <p class="text-xs text-gray-500">Click a cell to move toasts</p>
    </div>
  </div>
</template>
