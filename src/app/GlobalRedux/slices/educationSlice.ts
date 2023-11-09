"use client";
import {
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../API";

export type IResponseError = {
  data: {
    message: string;
  };
};

// interface IUser {
//   _id: string;
//   username: string;
// }

interface IState {
  education: any;
  error: SerializedError;
  pending: boolean;
}

const initialState: IState = {
  education: [] as any,
  error: {},
  pending: false,
};

export const getEducationThunk = createAsyncThunk("get-education", async () => {
  try {
    const response = await axios.get(`${API}/tasks?role=PM`, {});
    return response.data;
  } catch (error) {
    let message;
    if (axios.isAxiosError(error) && error.response) {
      message = error.response.data.message;
      throw new Error(message);
    } else {
      throw new Error("Не получить тесты :(").message;
    }
  }
});

export const getEducationSlice = createSlice({
  name: "get-education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEducationThunk.pending, (state) => {
      state.pending = true;
      state.error = {};
    }),
      builder.addCase(getEducationThunk.fulfilled, (state, action) => {
        (state.pending = false), (state.education = action.payload);
        state.error = {};
      }),
      builder.addCase(getEducationThunk.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});
