import { createSlice } from "@reduxjs/toolkit";

const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setLoading: (state) => {
      return true;
    },
    unsetLoading: (state) => {
      return false;
    },
  },
});

export const { setLoading, unsetLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
