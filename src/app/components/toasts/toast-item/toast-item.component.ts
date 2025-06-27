import {
  Component,
  Input,
  signal,
  effect,
  computed,
  HostListener,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TToast } from '../../../types/toast.types';
import { ToastService } from '../../../services/toast.service';
import { CloseIconComponent } from '../../icons/close-icon.component';

const toastersValues: Record<TToast['type'], string> = {
  primary: 'border-[#084298] bg-[#031633] text-[#6ea8fe]',
  secondary: 'border-[#41464b] bg-[#161719] text-[#a7acb1]',
  success: 'border-[#0f5132] bg-[#051b11] text-[#75b798]',
  error: 'border-[#842029] bg-[#2c0b0e] text-[#ea868f]',
  warning: 'border-[#997404] bg-[#332701] text-[#ffda6a]',
  info: 'border-[#087990] bg-[#032830] text-[#6edff6]',
  light: 'border-[#495057] bg-[#343a40] text-[#f8f9fa]',
  dark: 'border-[#343a40] bg-[#1a1d20] text-[#dee2e6]',
};

@Component({
  selector: 'app-toast-item',
  standalone: true,
  imports: [CommonModule, CloseIconComponent],
  templateUrl: './toast-item.component.html',
})
export class ToastItemComponent implements OnInit, OnDestroy {
  @Input({ required: true }) toast!: TToast;

  private toastService = inject(ToastService);

  // Signals
  progress = signal(0);
  paused = signal(false);

  // Constants
  totalDuration = 4000;
  maxProgress = 100;
  intervalTime = this.totalDuration / this.maxProgress;

  private intervalId?: ReturnType<typeof setInterval>;
  private delayTimeoutId?: ReturnType<typeof setTimeout>;

  variantClass = computed(() => toastersValues[this.toast.type]);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.paused.set(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.paused.set(false);
  }

  constructor() {
    // Effect to handle progress bar animation
    effect(() => {
      if (this.progress() >= 100) {
        this.closeToast();
      }
    });
  }
  ngOnInit() {
    const startProgress = () => {
      this.intervalId = setInterval(() => {
        if (!this.paused()) {
          this.progress.update((value) => {
            if (value < this.maxProgress) return value + 1;
            return value;
          });
        }
      }, this.intervalTime);
    };

    if (this.toast.delayAppearance) {
      this.delayTimeoutId = setTimeout(() => {
        this.toastService.stopDelayAppearance(this.toast.id || '');
        startProgress(); // Start progress after delay ends
      }, 1000);
    } else {
      startProgress(); // Start immediately if no delay
    }
  }

  closeToast() {
    this.toastService.removeToast(this.toast.id || '');
    this.toast.onCloseToast?.();
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.delayTimeoutId) clearTimeout(this.delayTimeoutId);
  }
}
