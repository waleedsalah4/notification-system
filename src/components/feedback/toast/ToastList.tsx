import { AnimatePresence, motion } from "motion/react";
import { useToastStore } from "@/store/toastStore";
import ToastItem from "./ToastItem";
import { cn } from "@/lib/utils";
import type { TPosition } from "@/types/toast.types";

interface Props {
  position: TPosition;
}

function ToastList({ position }: Props) {
  const records = useToastStore((state) => state.records);
  return (
    <div
      className={cn("fixed z-50 w-[400px]", {
        // Top positions
        "top-4 left-4 items-start": position === "top-left",
        "top-4 left-1/2 -translate-x-1/2 items-center":
          position === "top-center",
        "top-4 right-4 items-end": position === "top-right",

        // Bottom positions
        "bottom-4 left-4 items-start": position === "bottom-left",
        "bottom-4 left-1/2 -translate-x-1/2 items-center":
          position === "bottom-center",
        "right-4 bottom-4 items-end": position === "bottom-right",
      })}
    >
      <AnimatePresence>
        {records.map((record) => (
          <motion.div
            key={record.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut" }}
            layout
          >
            <ToastItem toast={record} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ToastList;
