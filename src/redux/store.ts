import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";
import authSlice from "./authSlice";
export const store = configureStore({
  reducer: {
    contactSlice,
    authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
