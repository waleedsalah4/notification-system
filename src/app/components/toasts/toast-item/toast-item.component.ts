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
import { ToastIconComponent } from '../../icons/toast-icon.component';
import { toasterAccentColors } from '../../../constants/toast.constants';

@Component({
  selector: 'app-toast-item',
  standalone: true,
  imports: [CommonModule, CloseIconComponent, ToastIconComponent],
  templateUrl: './toast-item.component.html',
})
export class ToastItemComponent implements OnInit, OnDestroy {
  @Input({ required: true }) toast!: TToast;

  private toastService = inject(ToastService);

  progress = signal(0);
  paused = signal(false);

  totalDuration = 4000;
  maxProgress = 100;
  intervalTime = this.totalDuration / this.maxProgress;

  private intervalId?: ReturnType<typeof setInterval>;
  private delayTimeoutId?: ReturnType<typeof setTimeout>;

  accentColor = computed(() => toasterAccentColors[this.toast.type] ?? '#6ea8fe');

  toastBackground = computed(
    () =>
      `radial-gradient(ellipse at 0% 50%, ${this.accentColor()}18 0%, transparent 60%), rgba(0, 0, 0, 0.65)`
  );

  iconBadgeBackground = computed(() => `${this.accentColor()}20`);
  iconBadgeShadow = computed(() => `0 0 14px ${this.accentColor()}40`);

  progressBarShadow = computed(() => `0 0 8px ${this.accentColor()}80`);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.paused.set(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.paused.set(false);
  }

  constructor() {
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
        startProgress();
      }, 1000);
    } else {
      startProgress();
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