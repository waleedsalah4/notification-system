<script setup lang="ts">
import { ref } from 'vue';
import type { TPosition } from './types';
import { useToastStore } from './stores/toaster';
import ShowToastButton from './components/buttons/ShowToastButton.vue';
import GithubButton from './components/buttons/GithubButton.vue';
import ToastList from './components/toast/ToastList.vue';
import ToastButtons from './components/buttons/ToastButtons.vue';
import PositionButtons from './components/buttons/PositionButtons.vue';

const position = ref<TPosition>('bottom-right');
const store = useToastStore();
function handleAddToast() {
  store.addToast({ type: 'info', title: 'Success', message: 'Position changed!' });
}
</script>

<template>
  <div class="relative container flex min-h-screen flex-col items-center justify-center gap-10">
    <header class="flex flex-col items-center gap-4">
      <h1>Notification Toast</h1>
      <p class="text-lg text-gray-400">
        A customizable toast notification system for React and Angular with built-in animations,
        positioning, auto-dismiss, and more.
      </p>
      <div class="flex items-center gap-4">
        <ShowToastButton />
        <GithubButton />
      </div>
    </header>

    <main class="grid grid-cols-1 items-start gap-10">
      <div class="flex flex-col gap-4">
        <h2 class="text-start text-lg font-bold">Types</h2>
        <p class="text-start text-base text-gray-300">
          This notification system supports{{ ' ' }}
          <span class="font-semibold">multiple toast types</span> — each styled with its own colors
          for clarity: Primary, Success, Error, Warning, Info, and more.
        </p>
        <ToastButtons />
      </div>
      <div class="mt-8 text-start text-base text-gray-300">
        <p class="">
          You can customize <span class="font-semibold">title</span> and{{ ' ' }}
          <span class="font-semibold">message</span> content, as well as add features like
          <span class="font-semibold"> animation, pause on hover</span>, auto-dismiss delay, and
          more.
        </p>
        <p class="">
          Easily extendable and fully responsive — try triggering different toasts using the buttons
          above.
        </p>
      </div>
      <div class="flex flex-col items-start space-y-4">
        <h2 class="mb-4 text-lg font-semibold">Toast Position</h2>
        <p>Swipe direction changes depending on the position.</p>
        <PositionButtons v-model:position="position" @change="handleAddToast" />
        <pre
          class="w-full overflow-auto rounded-lg bg-gray-900 p-4 text-start text-sm text-green-200"
        >
            <code>{{`<ToastList :position="position" />`}}</code>
          </pre>
      </div>
    </main>

    <ToastList :position="position" />
  </div>
</template>
