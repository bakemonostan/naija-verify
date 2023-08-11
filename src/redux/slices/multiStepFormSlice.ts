import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CheckedState } from "@radix-ui/react-checkbox";

export type FormType =
  | "add"
  | "details"
  | "photos"
  | "utilities"
  | "facilities"
  | null;

type MultiStepFormState = {
  currentForm?: FormType;
  checked?: CheckedState;
};

type InitialState = {
  value: MultiStepFormState;
};

const initialState = {
  value: {
    currentForm: "photos",
    checked: false,
  } as MultiStepFormState,
} as InitialState;

export const multiStepForm = createSlice({
  name: "multiStepForm",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<MultiStepFormState>) => {
      state.value.currentForm = action.payload.currentForm;
      state.value.checked = action.payload.checked;
    },
  },
});

export const { setForm } = multiStepForm.actions;
export const selectMultiStepForm = (state: RootState) =>
  state.multiStepForm.value;
export default multiStepForm.reducer;
