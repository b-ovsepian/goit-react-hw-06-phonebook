import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: "",
  reducers: {
    errorChange(state, { payload }) {
      return payload;
    },
  },
});

const { actions, reducer } = errorSlice;

export const { errorChange } = actions;
export default reducer;
