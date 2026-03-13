# Notification Toast

A customizable toast notification system implemented across React (Context API), React (Redux), React (Zustand), Angular, and Vue 3 — with animations, icons, positioning, delay appearance, and more.

![notification toast](https://github.com/user-attachments/assets/d07f98dd-d64a-47c6-8c87-68d93009ffab)

---

## Features

- One-liner `addToast` call to trigger any toast
- 8 semantic variants: Primary, Secondary, Success, Error, Warning, Info, Light, Dark
- 6 placement positions: top/bottom × left/center/right
- Auto-dismiss with animated progress bar (pause on hover)
- Optional delay appearance
- Custom title, message, and callback on close
- Fully typed with TypeScript

---

## Implementations

| Branch | Framework | State |
|---|---|---|
| `main` | React 19 | Redux Toolkit |
| `toast-with-zustand` | React 19 | Zustand |
| `toast-with-context-api` | React 19 | Context API |
| `toasts-in-angular` | Angular 20 | Signals |
| `toasts-in-vue` | Vue 3 | Pinia |

---

## Usage

### React (Context API) — this branch

```tsx
import { useToasts } from "@/context/ToastContext";

const { addToast } = useToasts();

addToast({
  type: "success",
  title: "Saved",
  message: "Your changes were saved successfully.",
  onCloseToast: () => console.log("closed"),
});
```

### React (Redux Toolkit)

```tsx
import { useAppDispatch } from "@/store/hooks";
import { addToast } from "@/store/toastSlice";

const dispatch = useAppDispatch();

dispatch(addToast({
  type: "success",
  title: "Saved",
  message: "Your changes were saved successfully.",
}));
```

### React (Zustand)

```tsx
import { useToastStore } from "@/store/toastStore";

const { addToast } = useToastStore();

addToast({
  type: "info",
  message: "New update available.",
});
```

### Angular (Signals)

```ts
import { ToastService } from "./services/toast.service";

constructor(private toastService: ToastService) {}

this.toastService.addToast({
  type: "warning",
  message: "Session expiring soon.",
});
```

### Vue 3 (Pinia)

```ts
import { useToastStore } from "@/stores/toast";

const toastStore = useToastStore();

toastStore.addToast({
  type: "error",
  message: "Something went wrong.",
});
```

---

## Props Reference

All options accepted by `addToast()`:

| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `type` | `ToastVariant` | — | Yes | Visual style: primary, secondary, success, error, warning, info, light, dark |
| `message` | `string` | — | Yes | Main notification text displayed in the toast body |
| `title` | `string` | — | No | Optional bold heading rendered above the message |
| `id` | `string` | auto | No | Unique identifier. Auto-generated via Date.now() if omitted |
| `delayAppearance` | `boolean` | false | No | When true, the toast appears after a short delay (~1s) |
| `onCloseToast` | `() => void` | — | No | Callback fired when the toast is dismissed (auto or manual) |

---

## Position

Control where toasts appear by passing a `position` prop to `<ToastList />`:

```tsx
<ToastList position="top-right" />
```

Available values: `top-left` · `top-center` · `top-right` · `bottom-left` · `bottom-center` · `bottom-right`

---

## Installation

```bash
git clone https://github.com/waleedsalah4/notification-system.git
cd notification-system

# Switch to the branch you want
git checkout toast-with-context-api   # Context API (this branch)
git checkout main                      # Redux Toolkit
git checkout toast-with-zustand        # Zustand
git checkout toasts-in-angular         # Angular
git checkout toasts-in-vue             # Vue 3

npm install
npm run dev
```

---

## Built With

- React 19 · Context API · TypeScript · Tailwind CSS · Vite · motion/react