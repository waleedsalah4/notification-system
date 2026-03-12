import type { TPosition, TToast, ToastVariant } from '@/types';

type keyValue = ToastVariant | 'delay';

export const toastsData: Record<keyValue, TToast> = {
  primary: {
    type: 'primary',
    title: 'Primary title',
    message: 'Primary Message',
    delayAppearance: false,
  },
  secondary: {
    type: 'secondary',
    message: 'Secondary message',
    delayAppearance: false,
  },
  success: {
    type: 'success',
    title: 'Success',
    message: 'Success message',
    delayAppearance: false,
  },
  error: {
    type: 'error',
    title: 'Error',
    message: 'Error message',
    delayAppearance: false,
  },
  warning: {
    type: 'warning',
    // title: "Warning",
    message: 'Lorem ipsum dolor sit amet',
    delayAppearance: false,
  },
  info: {
    type: 'info',
    // title: "add to card",
    message: 'Lorem ipsum dolor sit amet',
    delayAppearance: false,
  },
  light: {
    type: 'light',
    message: 'Lorem ipsum dolor sit amet',
    delayAppearance: false,
  },
  dark: {
    type: 'dark',
    message: 'Lorem ipsum dolor sit amet',
    delayAppearance: false,
  },
  delay: {
    type: 'info',
    message: 'this shows after short time',
    delayAppearance: true,
  },
};

export const positions: TPosition[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

export const toastersValues: Record<ToastVariant, string> = {
  primary: 'border-l-[#6ea8fe] bg-[#6ea8fe]/[0.06] text-[#6ea8fe]',
  secondary: 'border-l-[#a7acb1] bg-[#a7acb1]/[0.06] text-[#a7acb1]',
  success: 'border-l-[#75b798] bg-[#75b798]/[0.06] text-[#75b798]',
  error: 'border-l-[#ea868f] bg-[#ea868f]/[0.06] text-[#ea868f]',
  warning: 'border-l-[#ffda6a] bg-[#ffda6a]/[0.06] text-[#ffda6a]',
  info: 'border-l-[#6edff6] bg-[#6edff6]/[0.06] text-[#6edff6]',
  light: 'border-l-white bg-white/[0.06] text-[#f8f9fa]',
  dark: 'border-l-[#dee2e6] bg-[#dee2e6]/[0.06] text-[#dee2e6]',
};

export const toasterAccentColors: Record<ToastVariant, string> = {
  primary: '#6ea8fe',
  secondary: '#a7acb1',
  success: '#75b798',
  error: '#ea868f',
  warning: '#ffda6a',
  info: '#6edff6',
  light: '#f8f9fa',
  dark: '#dee2e6',
};

export const totalWidth = 100; // The progress bar width is 400 pixels, representing 100% completion.
export const duration = 4000; // Total duration in milliseconds
export const intervalTime = duration / totalWidth; // Interval time in milliseconds
export const delayAnimationDuration = duration / 2;
export const maxProgress = 100; // 100% completion
