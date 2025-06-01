import ToastItem from "./ToastItem";

function ToastList() {
  return (
    <div className="absolute right-2.5 bottom-12 w-96">
      <ToastItem variant="primary" />
      <ToastItem variant="success" />
    </div>
  );
}

export default ToastList;
