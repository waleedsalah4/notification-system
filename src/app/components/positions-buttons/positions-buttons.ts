import { Component, inject, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { positions, toastsData } from '../../constants/toast.constants';
import { TPosition } from '../../types/toast.types';
import { ToastService } from '../../services/toast.service';

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

  handleAddToast() {
    this.toastService.addToast(toastsData['primary']);
  }
  onPositionChange(pos: TPosition) {
    this.positionChange.emit(pos);
    this.handleAddToast();
  }
}
