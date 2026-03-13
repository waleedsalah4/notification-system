import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { toastsData } from '../../constants/toast.constants';

@Component({
  selector: 'app-show-toast-button',
  standalone: true,
  template: `
    <button
      (click)="handleShowToast()"
      class="group relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_28px_rgba(139,92,246,0.55)]"
    >
      <span class="relative z-10 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
          <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Z" clip-rule="evenodd" />
        </svg>
        Show Toast
      </span>
      <span class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full"></span>
    </button>
  `,
})
export class ShowToastButtonComponent {
  private toastService = inject(ToastService);

  handleShowToast(): void {
    this.toastService.addToast({
      ...toastsData['primary'],
      onCloseToast: () => console.log('HI!'),
    });
  }
}