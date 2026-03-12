<template>
  <div class="flex w-full flex-col items-center gap-5">
    <p class="text-xs font-semibold uppercase tracking-widest text-gray-600">Built with</p>
    <div class="flex flex-wrap justify-center gap-3">
      <a
        v-for="tech in stack"
        :key="tech.name"
        :href="tech.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105"
        :style="{
          borderColor: `${tech.color}35`,
          backgroundColor: `${tech.color}0a`,
          color: tech.color,
        }"
        @mouseenter="(e: MouseEvent) => ((e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${tech.color}30`)"
        @mouseleave="(e: MouseEvent) => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')"
      >
        <!-- Icon -->
        <svg
          v-if="tech.icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-4 shrink-0"
        >
          <path :d="tech.icon" />
        </svg>
        <!-- Letter badge fallback -->
        <span
          v-else
          class="flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-black"
          :style="{ background: `${tech.color}25` }"
        >
          {{ tech.abbr }}
        </span>
        {{ tech.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const stack = [
  {
    name: 'Vue 3',
    abbr: 'V',
    color: '#42b883',
    url: 'https://vuejs.org',
    // Vue chevron logo path
    icon: 'M2 3h3.5L12 15l6.5-12H22L12 21 2 3zm4.5 0h3L12 9l2.5-6h3L12 15 6.5 3z',
  },
  {
    name: 'Pinia',
    abbr: 'P',
    color: '#ffd859',
    url: 'https://pinia.vuejs.org',
    icon: null,
  },
  {
    name: 'TypeScript',
    abbr: 'TS',
    color: '#3178c6',
    url: 'https://www.typescriptlang.org',
    icon: null,
  },
  {
    name: 'Tailwind CSS',
    abbr: 'T',
    color: '#38bdf8',
    url: 'https://tailwindcss.com',
    // Tailwind wave-ish path
    icon: 'M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.27 10.8 14.42 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.73 7.2 14.58 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.27 16.8 9.42 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.73 13.2 9.58 12 7 12z',
  },
  {
    name: 'Vite',
    abbr: 'V',
    color: '#9f8eff',
    url: 'https://vitejs.dev',
    // Lightning bolt
    icon: 'M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z',
  },
  {
    name: 'motion-v',
    abbr: 'M',
    color: '#e2e8f0',
    url: 'https://motion.dev/vue',
    icon: null,
  },
];
</script>
