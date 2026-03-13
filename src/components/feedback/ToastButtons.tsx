import { useToasts } from "@/context/ToastContext";
import { toastsData, toasterAccentColors } from "@/constants";
import { ToastIcon } from "@/components/icons/icons";
import type { ToastVariant } from "@/types/toast.types";

const variants: { key: ToastVariant | "delay"; label: string }[] = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "success", label: "Success" },
  { key: "error", label: "Error" },
  { key: "warning", label: "Warning" },
  { key: "info", label: "Info" },
  { key: "light", label: "Light" },
  { key: "dark", label: "Dark" },
  { key: "delay", label: "Delay" },
];

function getAccentColor(key: ToastVariant | "delay"): string {
  return key === "delay" ? toasterAccentColors["info"] : toasterAccentColors[key];
}

function ToastButtons() {
  const { addToast } = useToasts();

  return (
    <div className="flex flex-wrap gap-3">
      {variants.map((v) => {
        const color = getAccentColor(v.key);
        return (
          <button
            key={v.key}
            className="flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium capitalize transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
            style={{ borderColor: `${color}40`, backgroundColor: `${color}0d`, color }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 18px ${color}35`;
              e.currentTarget.style.borderColor = `${color}70`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = `${color}40`;
            }}
            onClick={() => addToast(toastsData[v.key])}
          >
            {v.key === "delay" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 opacity-80">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
              </svg>
            ) : (
              <ToastIcon type={v.key as ToastVariant} />
            )}
            {v.label}
          </button>
        );
      })}
    </div>
  );
}

export default ToastButtons;