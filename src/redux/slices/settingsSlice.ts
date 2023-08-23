import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type SettingsForms = "profile" | "security" | "notifications";

type SettingsState = {
  formType?: SettingsForms;
};

type InitialState = {
  value: SettingsState;
};

const initialState = {
  value: {
    formType: "profile",
  } as SettingsState,
} as InitialState;

export const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    chooseSettingsFormType: (state, action: PayloadAction<SettingsState>) => {
      state.value.formType = action.payload.formType;
    },
  },
});

export const { chooseSettingsFormType } = settings.actions;
export const selectSettings = (state: RootState) => state.settings.value;
export default settings.reducer;
