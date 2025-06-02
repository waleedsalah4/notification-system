# 🔔 Notification Toast

A customizable toast notification system for React with built-in animations, icons, positioning, delay appearance, and more.

![notification toast](https://github.com/user-attachments/assets/d07f98dd-d64a-47c6-8c87-68d93009ffab)

---

## 🚀 Features

- ⚡ Easy to use with one-liner `addToast` dispatch
- 🎨 Built-in styling and color schemes (Primary, Success, Error, etc.)
- 📍 Customizable position: Top/Bottom Left/Right/Center
- 🕒 Optional delay animation
- 🧩 Custom title, message, and icons supported
- 💨 Auto-dismiss with animation
- 🔁 **Callback support**: Run a function after the toast closes

---

## 🧱 Example Usage

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

---

## 💡 Customization

You can fully customize:

- type: "success" | "error" | "info" | "warning" | "primary" | etc.
- title: String
- message: String
- delayAppearance: Boolean
- icon: can be added
- position: Controlled via <ToastList position="top-right" />
- run a callback function `onCloseToast: () => console.log("Toast has been closed!")`

---

## 📦 Installation

Clone this repo:

```tsx
git clone https://github.com/waleedsalah4/notification-system.git
cd notification-system
npm install
npm run dev

```

---

## 🛠 Built With

- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Vite
