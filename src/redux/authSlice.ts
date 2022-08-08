import { createSlice } from "@reduxjs/toolkit";

type authState = {
  isLogin: boolean;
};

const initialState: authState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuth: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { changeAuth } = authSlice.actions;

export default authSlice.reducer;
