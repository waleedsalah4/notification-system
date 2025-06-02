import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TToast } from "@/types/toast.types";

interface IToastSlice {
  records: TToast[];
}

const initialState: IToastSlice = {
  records: [],
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<TToast>) => {
      state.records.push({
        id: action.payload.id
          ? action.payload.id
          : new Date().getTime().toString(),
        title: action.payload.title,
        message: action.payload.message,
        type: action.payload.type,
        delayAppearance: action.payload.delayAppearance || false,
        onCloseToast: action.payload.onCloseToast,
      });
    },
    removeToast: (state, action) => {
      state.records = state.records.filter((el) => el.id !== action.payload);
    },
    stopDelayAppearance: (state, action) => {
      state.records.map((el) => {
        if (el.id === action.payload) {
          return (el.delayAppearance = false);
        }
        return el;
      });
    },
  },
});

export const { addToast, removeToast, stopDelayAppearance } =
  toastsSlice.actions;
export default toastsSlice.reducer;
