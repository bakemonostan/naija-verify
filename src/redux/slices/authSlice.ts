import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";

type AuthState = {
  isLoggedIn: boolean;
};

type InitialState = {
  value: AuthState;
};

const initialState = {
  value: {
    isLoggedIn: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.value.isLoggedIn = true;
    },
    logout: (state, action: PayloadAction<AuthState>) => {
      state.value.isLoggedIn = false;
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
