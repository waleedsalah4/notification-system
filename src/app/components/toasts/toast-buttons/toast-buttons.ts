import { Component, inject } from '@angular/core';
import { ToastService } from '../../../services/toast.service';
import { TToast } from '../../../types/toast.types';
import { toastsData } from '../../../constants/toast.constants';

@Component({
  selector: 'app-toast-buttons',
  imports: [],
  templateUrl: './toast-buttons.html',
})
export class ToastButtons {
  private toastService = inject(ToastService);

  toastButtons = [
    {
      label: 'Primary',
      className:
        'w-28 cursor-pointer rounded-lg border border-[#084298] bg-[#031633] px-3 py-2 text-base font-medium text-[#6ea8fe] capitalize',
      toast: toastsData['primary'],
    },
    {
      label: 'Secondary',
      className:
        'w-28 cursor-pointer rounded-lg border border-[#41464b] bg-[#161719] px-3 py-2 text-base font-medium text-[#a7acb1] capitalize',
      toast: toastsData['secondary'],
    },
    {
      label: 'Success',
      className:
        'w-28 cursor-pointer rounded-lg border border-[#0f5132] bg-[#051b11] px-3 py-2 text-base font-medium text-[#75b798] capitalize',
      toast: toastsData['success'],
    },
    {
      label: 'Error',
      className:
        'w-28 cursor-pointer rounded-lg border border-[#842029] bg-[#2c0b0e] px-3 py-2 text-base font-medium text-[#ea868f] capitalize',
      toast: toastsData['error'],
    },
    {
      label: 'Warning',
      className:
        'w-28 cursor-pointer rounded-lg border border-[#997404] bg-[#332701] px-3 py-2 text-base font-medium text-[#ffda6a] capitalize',
      toast: toastsData['warning'],
    },
    {
      label: 'Info',
      className:
        'w-28 cursor-pointer rounded-lg border border-[#087990] bg-[#032830] px-3 py-2 text-base font-medium text-[#6edff6] capitalize',
      toast: toastsData['info'],
    },
    {
      label: 'Light',
      className:
        'w-28 cursor-pointer rounded-lg border border-[#495057] bg-[#343a40] px-3 py-2 text-base font-medium text-[#f8f9fa] capitalize',
      toast: toastsData['light'],
    },
    {
      label: 'Dark',
      className:
        'w-28 cursor-pointer rounded-lg border border-[#343a40] bg-[#1a1d20] px-3 py-2 text-base font-medium text-[#dee2e6] capitalize',
      toast: toastsData['dark'],
    },
    {
      label: 'Delay',
      className:
        'w-28 cursor-pointer rounded-lg border border-[#a9abad] bg-[#f8f9fa] px-3 py-2 text-base font-medium text-[#343a40] capitalize',
      toast: toastsData['delay'],
    },
  ];

  handleAddToast(toast: TToast): void {
    this.toastService.addToast(toast);
  }
}
