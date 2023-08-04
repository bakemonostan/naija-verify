import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import settingsReducer from "./slices/settingsSlice";
import inviteTenantReducer from "./slices/inviteTenantSlice";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    settings: settingsReducer,
    inviteTenant: inviteTenantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
