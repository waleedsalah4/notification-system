import { TToast, TPosition } from '../types/toast.types';

export const positions: TPosition[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

export const toastsData: Record<string, TToast> = {
  primary: {
    type: 'primary',
    title: 'Primary Toast',
    message: 'This is a primary toast notification.',
  },
  secondary: {
    type: 'secondary',
    title: 'Secondary Toast',
    message: 'This is a secondary toast notification.',
  },
  success: {
    type: 'success',
    title: 'Success!',
    message: 'Operation completed successfully.',
  },
  error: {
    type: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
  },
  warning: {
    type: 'warning',
    title: 'Warning',
    message: 'Please check your input before proceeding.',
  },
  info: {
    type: 'info',
    title: 'Information',
    message: 'Here is some useful information for you.',
  },
  light: {
    type: 'light',
    title: 'Light Toast',
    message: 'This is a light themed toast.',
  },
  dark: {
    type: 'dark',
    title: 'Dark Toast',
    message: 'This is a dark themed toast.',
  },
  delay: {
    type: 'info',
    title: 'Delayed Toast',
    message: 'This toast has a delay appearance.',
    delayAppearance: true,
  },
};
