// context/ToastContext.tsx
import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import type { TToast } from "@/types/toast.types";

// State interface
interface ToastState {
  records: TToast[];
}

// Action types
type ToastAction =
  | { type: "ADD_TOAST"; payload: TToast }
  | { type: "REMOVE_TOAST"; payload: string }
  | { type: "STOP_DELAY_APPEARANCE"; payload: string };

// Context interface
interface ToastContextType {
  state: ToastState;
  addToast: (toast: TToast) => void;
  removeToast: (id: string) => void;
  stopDelayAppearance: (id: string) => void;
}

// Initial state
const initialState: ToastState = {
  records: [],
};

// Reducer function
const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        records: [
          ...state.records,
          {
            id: action.payload.id || new Date().getTime().toString(),
            title: action.payload.title,
            message: action.payload.message,
            type: action.payload.type,
            delayAppearance: action.payload.delayAppearance || false,
            onCloseToast: action.payload.onCloseToast,
          },
        ],
      };

    case "REMOVE_TOAST":
      return {
        ...state,
        records: state.records.filter((toast) => toast.id !== action.payload),
      };

    case "STOP_DELAY_APPEARANCE":
      return {
        ...state,
        records: state.records.map((toast) =>
          toast.id === action.payload
            ? { ...toast, delayAppearance: false }
            : toast
        ),
      };

    default:
      return state;
  }
};

// Create context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Provider component
interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  const addToast = (toast: TToast) => {
    dispatch({ type: "ADD_TOAST", payload: toast });
  };

  const removeToast = (id: string) => {
    dispatch({ type: "REMOVE_TOAST", payload: id });
  };

  const stopDelayAppearance = (id: string) => {
    dispatch({ type: "STOP_DELAY_APPEARANCE", payload: id });
  };

  const value: ToastContextType = {
    state,
    addToast,
    removeToast,
    stopDelayAppearance,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

// Custom hook to use the toast context
export const useToasts = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToasts must be used within a ToastProvider");
  }
  return context;
};
