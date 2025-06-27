import { Component, inject, input } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
import { TPosition, TToast } from '../../../types/toast.types';
import { cn } from '../../../lib/utils';
import { ToastItemComponent } from '../toast-item/toast-item.component';

@Component({
  selector: 'app-toast-list',
  imports: [ToastItemComponent],
  standalone: true,
  templateUrl: './toast-list.component.html',
})
export class ToastListComponent {
  position = input<TPosition>('bottom-right');

  private toastService = inject(ToastService);
  records = this.toastService.records;

  getContainerClasses(): string {
    return cn('fixed z-50 w-[400px]', {
      // Top positions
      'top-4 left-4 items-start': this.position() === 'top-left',
      'top-4 left-1/2 -translate-x-1/2 items-center':
        this.position() === 'top-center',
      'top-4 right-4 items-end': this.position() === 'top-right',
      // Bottom positions
      'bottom-4 left-4 items-start': this.position() === 'bottom-left',
      'bottom-4 left-1/2 -translate-x-1/2 items-center':
        this.position() === 'bottom-center',
      'right-4 bottom-4 items-end': this.position() === 'bottom-right',
    });
  }
}
