# 🔔 Notification Toast

A customizable toast notification system with built-in animations, icons, positioning, delay appearance, and more.

Supports both **React** and **Angular** implementations in separate branches.

![notification toast](https://github.com/user-attachments/assets/d07f98dd-d64a-47c6-8c87-68d93009ffab)

---

## 🚀 Features

- ⚡ Easy to use with a one-liner `addToast` call (React) or service injection (Angular)
- 🎨 Built-in styling and color schemes (Primary, Success, Error, etc.)
- 📍 Customizable position: Top/Bottom Left/Right/Center
- 🕒 Optional delay animation
- 🧩 Custom title, message, and icons supported
- 💨 Auto-dismiss with animation
- 🖱 Pause on hover supported

---

## 📂 Branches

- `main` – React version (with Redux)
- `toast-with-zustand` - React version (with Zustand)
- `toast-with-context-api` - React version (with Context API)
- `toasts-in-angular` – Angular version

---

## 🧱 Example Usage

### React

```tsx
const handleAddToast = () => {
  dispatch(
    addToast({
      type: "success",
      title: "Success",
      message: "This is a custom success toast!",
      delayAppearance: false,
    })
  );
};
```

### Angular

```tsx
constructor(private toastService: ToastService) {}
//or
private toastService = inject(ToastService);

addToast() {
  this.toastService.addToast({
    type: 'success',
    title: 'Success',
    message: 'This is a custom success toast!',
    delayAppearance: false,
  });
}

```

---

## 💡 Customization

You can fully customize:

- type: "success" | "error" | "info" | "warning" | "primary" | etc.
- title: String
- message: String
- delayAppearance: Boolean
- icon: Optional custom icon
- position: Controlled via component prop (React) or signal/service (Angular)

---

## 📦 Installation

Clone the repo and switch to your desired branch:

```bash
git clone https://github.com/waleedsalah4/notification-system.git
cd notification-system
```

#### React

```bash
git checkout main
npm install
npm run dev

```

#### Angular

```bash
git checkout toasts-in-angular
npm install
ng serve // or npm run start

```

---

## 🛠 Built With

#### React Version

- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Vite

#### Angular Version

- Angular 17+
- TypeScript
- Standalone Components
- Angular Signals
- Tailwind CSS
