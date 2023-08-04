import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { set } from "date-fns";

export type InvitationType = "screen" | "rental" | "report" | null;

type InviteTenantState = {
  invitationType?: InvitationType;
  modalState?: boolean;
};

type InitialState = {
  value: InviteTenantState;
};

const initialState = {
  value: {
    invitationType: null,
    modalState: false,
  } as InviteTenantState,
} as InitialState;

export const inviteTenant = createSlice({
  name: "inviteTenant",
  initialState,
  reducers: {
    chooseInvitationType: (state, action: PayloadAction<InviteTenantState>) => {
      state.value.invitationType = action.payload.invitationType;
    },
    setModal: (state, action: PayloadAction<InviteTenantState>) => {
      state.value.modalState = action.payload.modalState;
    },
  },
});

export const { chooseInvitationType, setModal } = inviteTenant.actions;
export const selectInviteTenant = (state: RootState) =>
  state.inviteTenant.value;
export default inviteTenant.reducer;
