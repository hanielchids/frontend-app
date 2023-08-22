import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";
import isLoadingReducer from "./isLoadingSlice";

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    isLoading: isLoadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
