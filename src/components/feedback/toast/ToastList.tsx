import { useAppSelector } from "@/store";
import ToastItem from "./ToastItem";

function ToastList() {
  const { records } = useAppSelector((state) => state.toasts);
  return (
    <div className="absolute right-2.5 bottom-12 w-[400px]">
      {records.map((record) => (
        <ToastItem key={record.id} toast={record} />
      ))}
    </div>
  );
}

export default ToastList;
