import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
import { RootState } from "../store";

type AuthState = {
  isLoggedIn?: boolean;
  selectedUser: "landlord" | "renter";
};

type InitialState = {
  value: AuthState;
};

const initialState = {
  value: {
    isLoggedIn: true,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.value.isLoggedIn = true;
    },
    logout: (state) => {
      state.value.isLoggedIn = false;
    },
    selectUser: (state, action: PayloadAction<AuthState>) => {
      state.value.selectedUser = action.payload.selectedUser;
    },
  },
});

export const { login, logout, selectUser } = auth.actions;
export const selectAuth = (state: RootState) => state.auth.value;
export default auth.reducer;
