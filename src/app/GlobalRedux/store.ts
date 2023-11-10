"use client";

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authSlice } from "./slices/authSlice";
import { getUserSlice } from "./slices/profileSlice";
import { getEducationSlice } from "./slices/educationSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile: getUserSlice.reducer,
    education: getEducationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
