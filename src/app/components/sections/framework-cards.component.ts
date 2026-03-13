import { Component, signal } from '@angular/core';

interface Framework {
  name: string;
  branch: string;
  color: string;
  isCurrentBranch: boolean;
  stateLib: string;
  description: string;
  tags: string[];
  abbr: string;
}

@Component({
  selector: 'app-framework-cards',
  standalone: true,
  template: `
    <section class="glass-card w-full p-8">
      <div class="mb-6">
        <div class="mb-1 flex items-center gap-3">
          <div
            class="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent"
          ></div>
          <span
            class="text-xs font-semibold tracking-widest text-gray-500 uppercase"
            >Implementations</span
          >
          <div
            class="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent"
          ></div>
        </div>
        <h2 class="mt-3 text-xl font-bold text-white">Available Versions</h2>
        <p class="mt-1.5 text-sm text-gray-400">
          Same toast system, implemented across 3 frameworks and 5 branches.
          Each explores a different approach to state management.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        @for (fw of frameworks; track fw.branch) {
          <a
            [href]="
              'https://github.com/waleedsalah4/notification-system/tree/' +
              fw.branch
            "
            target="_blank"
            rel="noopener noreferrer"
            class="group relative flex flex-col gap-3 overflow-hidden rounded-xl border p-5 transition-all duration-200 hover:scale-[1.02]"
            [style.border-color]="
              hoveredBranch() === fw.branch ? fw.color + '50' : fw.color + '25'
            "
            [style.background]="
              'radial-gradient(ellipse at 0% 0%, ' +
              fw.color +
              '08 0%, transparent 60%), rgba(0,0,0,0.3)'
            "
            (mouseenter)="hoveredBranch.set(fw.branch)"
            (mouseleave)="hoveredBranch.set(null)"
          >
            @if (fw.isCurrentBranch) {
              <span
                class="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400"
              >
                <span
                  class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"
                ></span>
                Live
              </span>
            }

            <!-- Icon + name -->
            <div class="flex items-center gap-3">
              <div
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black"
                [style.background]="fw.color + '18'"
                [style.box-shadow]="'0 0 12px ' + fw.color + '30'"
                [style.color]="fw.color"
              >
                {{ fw.abbr }}
              </div>
              <div>
                <p class="text-sm font-semibold text-white">{{ fw.name }}</p>
                <p class="text-xs text-gray-500">{{ fw.stateLib }}</p>
              </div>
            </div>

            <p class="text-xs leading-relaxed text-gray-400">
              {{ fw.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5">
              @for (tag of fw.tags; track tag) {
                <span
                  class="rounded-full px-2 py-0.5 text-[10px] font-medium"
                  [style.background]="fw.color + '12'"
                  [style.color]="fw.color"
                  >{{ tag }}</span
                >
              }
            </div>

            <!-- Branch name -->
            <div
              class="mt-auto flex items-center gap-1 text-xs text-gray-600 transition-colors group-hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-3"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.28.53l2.47-2.47h6.75a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75H7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ fw.branch }}
            </div>
          </a>
        }
      </div>
    </section>
  `,
})
export class FrameworkCardsComponent {
  hoveredBranch = signal<string | null>(null);

  frameworks: Framework[] = [
    {
      name: 'React (Redux)',
      branch: 'main',
      color: '#61dafb',
      isCurrentBranch: false,
      stateLib: 'Redux Toolkit',
      description:
        'Classic React with hooks, Redux Toolkit for state management, and motion/react for animations.',
      tags: ['React 19', 'Redux', 'motion/react', 'TypeScript'],
      abbr: 'R',
    },
    {
      name: 'React + Zustand',
      branch: 'toast-with-zustand',
      color: '#f97316',
      isCurrentBranch: false,
      stateLib: 'Zustand',
      description:
        'Lightweight alternative using Zustand for minimal, hook-based global state without boilerplate.',
      tags: ['React 19', 'Zustand', 'motion/react', 'TypeScript'],
      abbr: 'Z',
    },
    {
      name: 'React + Context',
      branch: 'toast-with-context-api',
      color: '#a78bfa',
      isCurrentBranch: false,
      stateLib: 'Context API',
      description:
        "Zero-dependency state management using React's built-in Context API and useReducer.",
      tags: ['React 19', 'Context API', 'motion/react', 'TypeScript'],
      abbr: 'C',
    },
    {
      name: 'Angular',
      branch: 'toasts-in-angular',
      color: '#dd1b16',
      isCurrentBranch: true,
      stateLib: 'Angular Signals',
      description:
        'Angular 17+ implementation using standalone components, services, and reactive Signals.',
      tags: ['Angular 20', 'Signals', 'Standalone', 'TypeScript'],
      abbr: 'A',
    },
    {
      name: 'Vue 3',
      branch: 'toasts-in-vue',
      color: '#42b883',
      isCurrentBranch: false,
      stateLib: 'Pinia',
      description:
        'Vue 3 Composition API with Pinia for state management and motion-v for fluid animations.',
      tags: ['Vue 3', 'Pinia', 'motion-v', 'TypeScript'],
      abbr: 'V',
    },
  ];
}
