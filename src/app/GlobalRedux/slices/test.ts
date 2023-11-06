import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "132",
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    test: (state) => {
      state.test = "123";
    },
  },
});

export const { test } = testSlice.actions;
