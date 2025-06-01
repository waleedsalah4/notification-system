import { createSlice } from "@reduxjs/toolkit";
import type { TToast } from "@/types/toast.types";

interface IToastSlice {
  records: TToast[];
}

const initialState: IToastSlice = {
  records: [
    {
      id: "1",
      type: "success",
      title: "add to card",
      message: "item added to your cart",
    },
    {
      id: "2",
      type: "error",
      //   title: "add to card",
      message: "error from the server",
    },
    {
      id: "3",
      type: "warning",
      //   title: "add to card",
      message: "your session will expire soon",
    },
    {
      id: "4",
      type: "primary",
      //   title: "add to card",
      message: "nothing to do today",
    },
  ],
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {},
});

export default toastsSlice.reducer;
