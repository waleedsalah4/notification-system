# 🔔 Notification Toast

An customizable toast notification system for React with built-in animations, icons, positioning, delay appearance, and more.

---

## 🚀 Features

- ⚡ Easy to use with one-liner `addToast` dispatch
- 🎨 Built-in styling and color schemes (Primary, Success, Error, etc.)
- 📍 Customizable position: Top/Bottom Left/Right/Center
- 🕒 Optional delay animation
- 🧩 Custom title, message, and icons supported
- 💨 Auto-dismiss with animation

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
