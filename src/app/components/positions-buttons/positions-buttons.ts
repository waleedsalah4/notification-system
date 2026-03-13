import { Component, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { positions, toastsData } from '../../constants/toast.constants';
import { TPosition } from '../../types/toast.types';
import { ToastService } from '../../services/toast.service';

const dotAlign: Record<TPosition, string> = {
  'top-left':      'items-start justify-start',
  'top-center':    'items-start justify-center',
  'top-right':     'items-start justify-end',
  'bottom-left':   'items-end justify-start',
  'bottom-center': 'items-end justify-center',
  'bottom-right':  'items-end justify-end',
};

@Component({
  selector: 'app-positions-buttons',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './positions-buttons.html',
})
export class PositionsButtons {
  position = input<TPosition>('bottom-right');
  positionChange = output<TPosition>();

  private toastService = inject(ToastService);
  positions = signal<TPosition[]>(positions);

  getDotAlign(pos: TPosition): string {
    return dotAlign[pos];
  }

  isActive(pos: TPosition): boolean {
    return this.position() === pos;
  }

  onPositionChange(pos: TPosition) {
    this.positionChange.emit(pos);
    this.toastService.addToast({
      ...toastsData['info'],
      title: 'Position changed',
      message: `Now showing at ${pos}`,
    });
  }
}