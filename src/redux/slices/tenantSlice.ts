import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type TenantPage = "profile" | "table" | "default";

type TenantState = {
  page?: TenantPage;
};

type InitialState = {
  value: TenantState;
};

const initialState = {
  value: {
    page: "default",
  } as TenantState,
} as InitialState;

export const tenantPage = createSlice({
  name: "tenantPage",
  initialState,
  reducers: {
    chooseTenantPage: (state, action: PayloadAction<TenantPage>) => {
      state.value.page = action.payload;
    },
  },
});

export const { chooseTenantPage } = tenantPage.actions;
export const selectTenantPage = (state: RootState) => state.tenantPage.value;
export default tenantPage.reducer;
