import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type FormType =
  | "add"
  | "details"
  | "photos"
  | "utilities"
  | "facilities"
  | null;

type MultiStepFormState = {
  currentForm?: string | null;
  checkedValues?: string[];
};

type InitialState = {
  value: MultiStepFormState;
};

const initialState = {
  value: {
    currentForm: null,
    // checkedValues: [],
  } as MultiStepFormState,
} as InitialState;

export const multiStepForm = createSlice({
  name: "multiStepForm",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<string>) => {
      state.value.currentForm = action.payload;
    },
    //spread currentform to checkedValues
    // setCheckedValues: (state, action: PayloadAction<string>) => {
    //   state.value.checkedValues = [
    //     ...state.value.checkedValues,
    //     action.payload,
    //   ];
    // },
  },
});

export const { setForm } = multiStepForm.actions;
export const selectMultiStepForm = (state: RootState) =>
  state.multiStepForm?.value;
export default multiStepForm.reducer;
