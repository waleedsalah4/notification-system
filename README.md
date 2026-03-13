# 🔔 Notification Toast

A customizable toast notification system with built-in animations, icons, positioning, delay appearance, and more.

Implemented across **React**, **Angular**, and **Vue 3** — each in its own branch, each exploring a different approach to state management.

![notification-toast](https://notification-toast.vercel.app/notification-toast.webp)

---

## 🚀 Features

- ⚡ Simple one-liner API — `addToast()` / service injection / Pinia action
- 🎨 8 built-in variants — Primary, Secondary, Success, Error, Warning, Info, Light, Dark
- 📍 6 configurable positions — Top/Bottom · Left/Right/Center
- 💨 Auto-dismiss with animated glowing progress bar
- 🖱 Pause on hover — timer freezes on mouse-over
- 🕒 Delay appearance — show toast after a short delay
- 🧩 Optional title, custom message, and per-variant icons
- 🔔 `onCloseToast` callback — fires on auto or manual dismiss
- ✨ Fluid animations powered by **motion/react** and **motion-v**

---

## 📂 Branches

| Branch | Framework | State Management |
|---|---|---|
| `main` | React | Redux Toolkit |
| `toast-with-zustand` | React | Zustand |
| `toast-with-context-api` | React | Context API + useReducer |
| `toasts-in-angular` | Angular 17+ | Angular Signals |
| `toasts-in-vue` | Vue 3 | Pinia |

---

## 🧱 Usage

### React (Redux Toolkit)

```tsx
dispatch(addToast({
  type: "success",
  title: "Done!",
  message: "Your changes have been saved.",
  delayAppearance: false,
  onCloseToast: () => console.log("closed"),
}));
```

### React (Zustand)

```tsx
const { addToast } = useToastStore();

addToast({
  type: "info",
  message: "Zustand-powered toast!",
});
```

### React (Context API)

```tsx
const { addToast } = useToastContext();

addToast({
  type: "warning",
  title: "Heads up",
  message: "Context API toast, no extra libraries.",
});
```

### Angular

```ts
// inject
private toastService = inject(ToastService);

this.toastService.addToast({
  type: "success",
  title: "Success",
  message: "Angular Signals-powered toast!",
  delayAppearance: false,
});
```

### Vue 3 (Pinia)

```ts
const toastStore = useToastStore();

toastStore.addToast({
  type: "success",
  title: "Saved!",
  message: "Vue 3 + Pinia toast.",
});
```

---

## 📋 Props / API

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `ToastVariant` | **required** | Visual variant (success, error, info…) |
| `message` | `string` | **required** | Main notification text |
| `title` | `string` | `—` | Optional bold heading above the message |
| `id` | `string` | auto | Unique ID — auto-generated if omitted |
| `delayAppearance` | `boolean` | `false` | Show toast after a short delay (~1s) |
| `onCloseToast` | `() => void` | `—` | Callback fired when toast is dismissed |

---

## 📦 Getting Started

Clone the repo and switch to your desired branch:

```bash
git clone https://github.com/waleedsalah4/notification-system.git
cd notification-system
```

### React (main / zustand / context-api)

```bash
git checkout main   # or toast-with-zustand / toast-with-context-api
npm install
npm run dev
```

### Angular

```bash
git checkout toasts-in-angular
npm install
ng serve
```

### Vue 3

```bash
git checkout toasts-in-vue
npm install
npm run dev
```

---

## 🛠 Built With

### React branches

- React 19 · TypeScript · Vite
- Redux Toolkit / Zustand / Context API
- Tailwind CSS · motion/react

### Angular branch

- Angular 17+ · TypeScript
- Standalone Components · Angular Signals
- Tailwind CSS

### Vue 3 branch

- Vue 3 · TypeScript · Vite
- Pinia · motion-v
- Tailwind CSS
