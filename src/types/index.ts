export type ToastVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export type TPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type TToast = {
  id?: string;
  type: ToastVariant;
  title?: string;
  message: string;
  delayAppearance?: boolean;
  onCloseToast?: () => void;
};
