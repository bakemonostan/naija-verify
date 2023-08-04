import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type InvitationType = "screen" | "rental" | null;

type InviteTenantState = {
  invitationType?: InvitationType;
  setModal?: boolean;
};

type InitialState = {
  value: InviteTenantState;
};

const initialState = {
  value: {
    invitationType: null,
    setModal: false,
  } as InviteTenantState,
} as InitialState;

export const inviteTenant = createSlice({
    name: "inviteTenant",
    initialState,
    reducers: {
        chooseInvitationType: (state, action: PayloadAction<InviteTenantState>) => {
            state.value.invitationType = action.payload.invitationType;
        }
    }
});

export const { chooseInvitationType } = inviteTenant.actions;
export const selectInviteTenant = (state: RootState) => state.inviteTenant.value;
export default inviteTenant.reducer;
