import { Component, signal } from '@angular/core';

interface TechItem {
  name: string;
  color: string;
  url: string;
  abbr: string;
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  template: `
    <div class="flex w-full flex-col items-center gap-5">
      <p class="text-xs font-semibold uppercase tracking-widest text-gray-600">Built with</p>
      <div class="flex flex-wrap justify-center gap-3">
        @for (tech of stack; track tech.name) {
          <a
            [href]="tech.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105"
            [style.border-color]="tech.color + '35'"
            [style.background-color]="tech.color + '0a'"
            [style.color]="tech.color"
            (mouseenter)="hoveredTech.set(tech.name)"
            (mouseleave)="hoveredTech.set(null)"
            [style.box-shadow]="hoveredTech() === tech.name ? '0 0 16px ' + tech.color + '30' : 'none'"
          >
            <span
              class="flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-black"
              [style.background]="tech.color + '25'"
            >{{ tech.abbr }}</span>
            {{ tech.name }}
          </a>
        }
      </div>
    </div>
  `,
})
export class TechStackComponent {
  hoveredTech = signal<string | null>(null);

  stack: TechItem[] = [
    { name: 'Angular',    color: '#dd1b16', url: 'https://angular.dev',               abbr: 'A'  },
    { name: 'Signals',    color: '#f97316', url: 'https://angular.dev/guide/signals',  abbr: 'S'  },
    { name: 'TypeScript', color: '#3178c6', url: 'https://www.typescriptlang.org',     abbr: 'TS' },
    { name: 'Tailwind',   color: '#38bdf8', url: 'https://tailwindcss.com',            abbr: 'T'  },
    { name: 'Vite',       color: '#9f8eff', url: 'https://vitejs.dev',                 abbr: 'V'  },
  ];
}