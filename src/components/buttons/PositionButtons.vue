<script setup lang="ts">
import { positions } from '@/constants';
import type { TPosition } from '@/types';
import { cn } from '@/lib/utils';

const props = defineProps<{
  position: TPosition;
}>();

const emit = defineEmits<{
  (e: 'update:position', value: TPosition): void;
  (e: 'change'): void;
}>();

function onPositionClick(pos: TPosition) {
  // update parent state via v-model
  emit('update:position', pos);

  // emit change event for side effect (toast)
  emit('change');
}
</script>
<template>
  <div class="flex w-full flex-wrap items-center justify-start gap-2">
    <button
      v-for="pos in positions"
      :key="pos"
      @click="onPositionClick(pos)"
      :class="
        cn(
          'cursor-pointer rounded bg-gray-800 px-3 py-2 text-sm font-medium text-gray-300 capitalize transition hover:bg-gray-700',
          { 'bg-blue-600 text-white': position === pos },
        )
      "
    >
      {{ pos.replace('-', ' ') }}
    </button>
  </div>
</template>
