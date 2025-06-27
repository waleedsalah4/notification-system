import { Injectable, signal } from '@angular/core';
import { TToast } from '../types/toast.types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _records = signal<TToast[]>([]);

  get records() {
    return this._records.asReadonly(); // expose readonly signal
  }

  addToast(toast: TToast): void {
    const newToast: TToast = {
      id: toast.id || new Date().getTime().toString(),
      title: toast.title,
      message: toast.message,
      type: toast.type,
      delayAppearance: toast.delayAppearance || false,
      onCloseToast: toast.onCloseToast,
    };
    this._records.update((prev) => [...prev, newToast]);
  }

  removeToast(id: string): void {
    this._records.update((prev) => prev.filter((t) => t.id !== id));
  }

  stopDelayAppearance(id: string): void {
    this._records.update((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, delayAppearance: false } : toast
      )
    );
  }
}
