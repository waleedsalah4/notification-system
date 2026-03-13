import { Component, computed, signal } from '@angular/core';
import { TPosition } from './types/toast.types';
import { PositionsButtons } from './components/positions-buttons/positions-buttons';
import { GithubButtonComponent } from './components/header/github-button';
import { ShowToastButtonComponent } from './components/header/show-toast-button';
import { ToastButtons } from './components/toasts/toast-buttons/toast-buttons';
import { ToastListComponent } from './components/toasts/toast-list/toast-list.component';
import { FeatureHighlightsComponent } from './components/sections/feature-highlights.component';
import { PropsTableComponent } from './components/sections/props-table.component';
import { TechStackComponent } from './components/sections/tech-stack.component';
import { FrameworkCardsComponent } from './components/sections/framework-cards.component';

@Component({
  selector: 'app-root',
  imports: [
    PositionsButtons,
    GithubButtonComponent,
    ShowToastButtonComponent,
    ToastButtons,
    ToastListComponent,
    FeatureHighlightsComponent,
    PropsTableComponent,
    TechStackComponent,
    FrameworkCardsComponent,
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