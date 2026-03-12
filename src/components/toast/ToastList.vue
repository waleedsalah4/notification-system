<script setup lang="ts">
import { useToastStore } from '@/stores/toaster';
import type { TPosition } from '@/types';
import { AnimatePresence, motion } from 'motion-v';
import ToastItem from './ToastItem.vue';
import { cn } from '@/lib/utils';

const props = defineProps<{ position: TPosition }>();

const store = useToastStore();
const positionClasses: Record<TPosition, string> = {
  'top-left': 'top-4 left-4 items-start',
  'top-center': 'top-4 left-1/2 -translate-x-1/2 items-center',
  'top-right': 'top-4 right-4 items-end',
  'bottom-left': 'bottom-4 left-4 items-start',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
  'bottom-right': 'right-4 bottom-4 items-end',
};
</script>

<template>
  <div :class="cn('fixed z-50 w-[400px]', positionClasses[props.position])">
    <AnimatePresence>
      <motion.div
        v-for="record in store.records"
        :key="record.id"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        :transition="{ ease: 'easeInOut' }"
        layout
      >
        <ToastItem :toast="record" />
      </motion.div>
    </AnimatePresence>
  </div>
</template>
