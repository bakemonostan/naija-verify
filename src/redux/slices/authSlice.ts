import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
import { RootState } from "../store";

export type Forms =
  | "register"
  | "landlord details"
  | "login"
  | "userType"
  | null;

type AuthState = {
  isLoggedIn?: boolean;
  selectedUser?: "landlord" | "renter";
  modalStates?: "verify" | "created" | null;
  formType?: Forms;
};

type InitialState = {
  value: AuthState;
};

const initialState = {
  value: {
    isLoggedIn: false,
    selectedUser: null,
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

    chooseFormType: (state, action: PayloadAction<AuthState>) => {
      state.value.formType = action.payload.formType;
    },

    setModal: (state, action: PayloadAction<AuthState>) => {
      state.value.modalStates = action.payload.modalStates;
    },
  },
});

export const { login, logout, selectUser, chooseFormType, setModal } =
  auth.actions;
export const selectAuth = (state: RootState) => state.auth.value;
export default auth.reducer;
