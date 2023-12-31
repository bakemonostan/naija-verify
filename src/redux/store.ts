import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import settingsReducer from "./slices/settingsSlice";
import inviteTenantReducer from "./slices/inviteTenantSlice";
import multiStepFormReducer from "./slices/multiStepFormSlice";
import tenantPageReducer from "./slices/tenantSlice";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    settings: settingsReducer,
    inviteTenant: inviteTenantReducer,
    multiStepForm: multiStepFormReducer,
    tenantPage: tenantPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
