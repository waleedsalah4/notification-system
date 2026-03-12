<script setup lang="ts">
import { useToastStore } from '@/stores/toaster';
import { toastsData } from '@/constants';
const store = useToastStore();
</script>

<template>
  <div class="flex flex-wrap items-center justify-start gap-4">
    <button
      class="w-28 cursor-pointer rounded-lg border border-[#084298] bg-[#031633] px-3 py-2 text-base font-medium text-[#6ea8fe] capitalize"
      @click="
        {
          store.addToast(toastsData.primary);
        }
      "
    >
      Primary
    </button>
    <button
      class="w-28 cursor-pointer rounded-lg border border-[#41464b] bg-[#161719] px-3 py-2 text-base font-medium text-[#a7acb1] capitalize"
      @click="
        {
          store.addToast(toastsData.secondary);
        }
      "
    >
      Secondary
    </button>
    <button
      class="w-28 cursor-pointer rounded-lg border border-[#0f5132] bg-[#051b11] px-3 py-2 text-base font-medium text-[#75b798] capitalize"
      @click="
        {
          store.addToast(toastsData.success);
        }
      "
    >
      Success
    </button>
    <button
      class="w-28 cursor-pointer rounded-lg border border-[#842029] bg-[#2c0b0e] px-3 py-2 text-base font-medium text-[#ea868f] capitalize"
      @click="
        {
          store.addToast(toastsData.error);
        }
      "
    >
      Error
    </button>
    <button
      class="w-28 cursor-pointer rounded-lg border border-[#997404] bg-[#332701] px-3 py-2 text-base font-medium text-[#ffda6a] capitalize"
      @click="
        {
          store.addToast(toastsData.warning);
        }
      "
    >
      Warning
    </button>
    <button
      class="w-28 cursor-pointer rounded-lg border border-[#087990] bg-[#032830] px-3 py-2 text-base font-medium text-[#6edff6] capitalize"
      @click="
        {
          store.addToast(toastsData.info);
        }
      "
    >
      Info
    </button>
    <button
      class="w-28 cursor-pointer rounded-lg border border-[#495057] bg-[#343a40] px-3 py-2 text-base font-medium text-[#f8f9fa] capitalize"
      @click="
        {
          store.addToast(toastsData.light);
        }
      "
    >
      Light
    </button>
    <button
      class="w-28 cursor-pointer rounded-lg border border-[#343a40] bg-[#1a1d20] px-3 py-2 text-base font-medium text-[#dee2e6] capitalize"
      @click="
        {
          store.addToast(toastsData.dark);
        }
      "
    >
      Dark
    </button>
    <button
      class="w-28 cursor-pointer rounded-lg border border-[#a9abad] bg-[#f8f9fa] px-3 py-2 text-base font-medium text-[#343a40] capitalize"
      @click="
        {
          store.addToast(toastsData.delay);
        }
      "
    >
      Delay
    </button>
  </div>
</template>
