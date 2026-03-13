import { Component, inject, signal } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
import { TToast } from '../../../types/toast.types';
import { toastsData, toasterAccentColors } from '../../../constants/toast.constants';
import { ToastIconComponent } from '../../icons/toast-icon.component';

interface ToastButton {
  key: string;
  label: string;
  color: string;
  toast: TToast;
}

@Component({
  selector: 'app-toast-buttons',
  imports: [ToastIconComponent],
  templateUrl: './toast-buttons.html',
})
export class ToastButtons {
  private toastService = inject(ToastService);

  hoveredKey = signal<string | null>(null);

  toastButtons: ToastButton[] = [
    { key: 'primary',   label: 'Primary',   color: toasterAccentColors['primary'],   toast: toastsData['primary'] },
    { key: 'secondary', label: 'Secondary', color: toasterAccentColors['secondary'], toast: toastsData['secondary'] },
    { key: 'success',   label: 'Success',   color: toasterAccentColors['success'],   toast: toastsData['success'] },
    { key: 'error',     label: 'Error',     color: toasterAccentColors['error'],     toast: toastsData['error'] },
    { key: 'warning',   label: 'Warning',   color: toasterAccentColors['warning'],   toast: toastsData['warning'] },
    { key: 'info',      label: 'Info',      color: toasterAccentColors['info'],      toast: toastsData['info'] },
    { key: 'light',     label: 'Light',     color: toasterAccentColors['light'],     toast: toastsData['light'] },
    { key: 'dark',      label: 'Dark',      color: toasterAccentColors['dark'],      toast: toastsData['dark'] },
    { key: 'delay',     label: 'Delay',     color: toasterAccentColors['info'],      toast: toastsData['delay'] },
  ];

  getBorderColor(btn: ToastButton): string {
    return this.hoveredKey() === btn.key ? `${btn.color}70` : `${btn.color}40`;
  }

  getBoxShadow(btn: ToastButton): string {
    return this.hoveredKey() === btn.key ? `0 0 18px ${btn.color}35` : 'none';
  }

  handleAddToast(toast: TToast): void {
    this.toastService.addToast(toast);
  }
}