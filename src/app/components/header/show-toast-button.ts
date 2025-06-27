import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
import { toastsData } from '../../constants/toast.constants';

@Component({
  selector: 'app-show-toast-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="handleShowToast()"
      class="w-36 cursor-pointer rounded-lg bg-[#031633] px-4 py-2 text-base text-white transition hover:bg-[#161c27]"
    >
      Show Toast
    </button>
  `,
})
export class ShowToastButtonComponent {
  constructor(private toastService: ToastService) {}

  handleShowToast(): void {
    this.toastService.addToast({
      ...toastsData['primary'],
      onCloseToast: () => console.log('HI!'),
    });
  }
}
