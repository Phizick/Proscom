"use client";

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authSlice } from "./slices/authSlice";
import { getUserSlice } from "./slices/profileSlice";
import { getEducationSlice } from "./slices/educationSlice";
import { uploadSlice } from "./slices/uploadSlice";
import { usersSlice } from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile: getUserSlice.reducer,
    education: getEducationSlice.reducer,
    upload: uploadSlice.reducer,
    users: usersSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
