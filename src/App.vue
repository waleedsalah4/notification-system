<script setup lang="ts">
import { ref } from 'vue';
import type { TPosition } from './types';
import { useToastStore } from './stores/toaster';
import ShowToastButton from './components/buttons/ShowToastButton.vue';
import GithubButton from './components/buttons/GithubButton.vue';
import ToastList from './components/toast/ToastList.vue';
import ToastButtons from './components/buttons/ToastButtons.vue';
import PositionButtons from './components/buttons/PositionButtons.vue';
import FeatureHighlights from './components/sections/FeatureHighlights.vue';
import PropsTable from './components/sections/PropsTable.vue';
import TechStack from './components/sections/TechStack.vue';

const position = ref<TPosition>('bottom-right');
const store = useToastStore();
function handleAddToast() {
  store.addToast({ type: 'info', title: 'Position changed', message: `Now showing at ${position.value}` });
}
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Background decorative orbs -->
    <div class="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
      <div class="absolute top-1/3 -right-48 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
      <div class="absolute -bottom-48 left-1/3 h-80 w-80 rounded-full bg-cyan-500/8 blur-[100px]" />
    </div>

    <div class="container relative flex flex-col items-center gap-16">
      <!-- Hero -->
      <header class="flex flex-col items-center gap-6 text-center">
        <div class="flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5">
          <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span class="text-sm font-medium text-violet-300">Vue 3 · Pinia · motion-v · TypeScript</span>
        </div>

        <h1 class="gradient-text text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
          Toast Notifications
        </h1>

        <p class="max-w-lg text-base leading-relaxed text-gray-400">
          A fully customizable notification system with built-in animations,
          6 positions, auto-dismiss, pause on hover, and 8 beautiful variants.
        </p>

        <div class="flex items-center gap-3">
          <ShowToastButton />
          <GithubButton />
        </div>
      </header>

      <!-- Divider -->
      <div class="w-full">
        <div class="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <!-- Feature highlights -->
      <FeatureHighlights />

      <!-- Main interactive sections -->
      <main class="w-full space-y-6">
        <!-- Toast types -->
        <section class="glass-card p-8">
          <div class="mb-6">
            <div class="mb-1 flex items-center gap-3">
              <div class="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
              <span class="text-xs font-semibold uppercase tracking-widest text-gray-500">Variants</span>
              <div class="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
            </div>
            <h2 class="mt-3 text-xl font-bold text-white">Toast Types</h2>
            <p class="mt-1.5 text-sm text-gray-400">
              8 distinct variants — each with its own icon, color, and personality.
            </p>
          </div>
          <ToastButtons />
        </section>

        <!-- Position picker -->
        <section class="glass-card p-8">
          <div class="mb-6">
            <div class="mb-1 flex items-center gap-3">
              <div class="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
              <span class="text-xs font-semibold uppercase tracking-widest text-gray-500">Positioning</span>
              <div class="h-px flex-1 bg-linear-to-r from-transparent via-white/15 to-transparent" />
            </div>
            <h2 class="mt-3 text-xl font-bold text-white">Smart Positioning</h2>
            <p class="mt-1.5 text-sm text-gray-400">
              Place toasts in any of 6 corners or centers. Swipe direction adapts automatically.
            </p>
          </div>
          <PositionButtons v-model:position="position" @change="handleAddToast" />
          <pre
            class="mt-6 overflow-auto rounded-xl border border-white/8 bg-black/50 p-4 text-start text-sm text-emerald-300"
          ><code>{{ `<ToastList :position="'${position}'" />` }}</code></pre>
        </section>

        <!-- Props / API reference -->
        <PropsTable />
      </main>

      <!-- Tech stack -->
      <TechStack />

      <ToastList :position="position" />
    </div>
  </div>
</template>
