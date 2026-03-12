<script setup lang="ts">
import { useToastStore } from '@/stores/toaster';
import { toastsData } from '@/constants';

const store = useToastStore();
function handleAddToast() {
  store.addToast({
    ...toastsData.primary,
    onCloseToast: () => console.log('HI!'),
  });
}
</script>

<template>
  <button
    @click="handleAddToast"
    class="w-36 rounded-lg bg-[#031633] px-4 py-2 text-base text-white transition hover:bg-[#161c27]"
  >
    Show Toast
  </button>
</template>
