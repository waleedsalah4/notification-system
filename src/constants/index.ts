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
  primary: 'border-[#084298] bg-[#031633] text-[#6ea8fe]',
  secondary: 'border-[#41464b] bg-[#161719] text-[#a7acb1]',
  success: 'border-[#0f5132] bg-[#051b11] text-[#75b798]',
  error: 'border-[#842029] bg-[#2c0b0e]  text-[#ea868f]',
  warning: 'border-[#997404] bg-[#332701]  text-[#ffda6a]',
  info: 'border-[#087990] bg-[#032830]  text-[#6edff6]',
  light: 'border-[#495057] bg-[#343a40]  text-[#f8f9fa]',
  dark: 'border-[#343a40] bg-[#1a1d20]  text-[#dee2e6]',
};

export const totalWidth = 100; // The progress bar width is 400 pixels, representing 100% completion.
export const duration = 4000; // Total duration in milliseconds
export const intervalTime = duration / totalWidth; // Interval time in milliseconds
export const delayAnimationDuration = duration / 2;
export const maxProgress = 100; // 100% completion
