import { Component, computed, signal } from '@angular/core';
import { TPosition } from './types/toast.types';
import { PositionsButtons } from './components/positions-buttons/positions-buttons';
import { GithubButtonComponent } from './components/header/github-button';
import { ShowToastButtonComponent } from './components/header/show-toast-button';
import { ToastButtons } from './components/toasts/toast-buttons/toast-buttons';
import { ToastListComponent } from './components/toasts/toast-list/toast-list.component';

@Component({
  selector: 'app-root',
  imports: [
    PositionsButtons,
    GithubButtonComponent,
    ShowToastButtonComponent,
    ToastButtons,
    ToastListComponent,
  ],
  templateUrl: './app.html',
})
export class App {
  position = signal<TPosition>('bottom-right');
  onPositionUpdate(position: TPosition) {
    this.position.set(position);
  }

  codeSnippet = computed(
    () => `<app-toast-list [position]="${this.position()}" />`
  );
}
