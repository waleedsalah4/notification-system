import { CloseIcon } from "@/components/icons/icons";
import { cn } from "@/lib/utils";

const toastersValues = {
  primary: "border-[#084298] bg-[#031633] text-[#6ea8fe]",
  secondary: "border-[#41464b] bg-[#161719] text-[#a7acb1]",
  success: "border-[#0f5132] bg-[#051b11] text-[#75b798]",
  error: "border-[#842029] bg-[#2c0b0e] p-4 text-[#ea868f]",
  warning: "border-[#997404] bg-[#332701] p-4 text-[#ffda6a]",
  info: "border-[#087990] bg-[#032830] p-4 text-[#6edff6]",
  light: "border-[#495057] bg-[#343a40] p-4 text-[#f8f9fa]",
  dark: "border-[#343a40] bg-[#1a1d20] p-4 text-[#dee2e6]",
};

type ToastVariant = keyof typeof toastersValues;

interface ToastItemProps {
  variant: ToastVariant;
  // children?: React.ReactNode;
}

function ToastItem({ variant }: ToastItemProps) {
  const variantClass = toastersValues[variant];
  return (
    <div
      className={cn(
        "relative mb-4 overflow-hidden rounded-md border p-4 text-start",
        variantClass
      )}
    >
      <h5 className="text-base capitalize">title</h5>
      <p className="mb-0 text-[15px] capitalize">this is the message</p>
      <button
        type="button"
        aria-label="Close"
        className="absolute top-2 right-2 cursor-pointer text-white opacity-50 hover:opacity-75 focus:opacity-100"
      >
        <CloseIcon className="size-2" />
      </button>
      <span className="absolute bottom-0 left-0 inline-block h-1 w-full bg-current align-middle opacity-50">
        placeholder
      </span>
    </div>
  );
}

export default ToastItem;
