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

interface IUser {
  _id: string;
  username: string;
}

interface IState {
  profile: IUser;
  error: SerializedError;
  pending: boolean;
}

const initialState: IState = {
  profile: {} as IUser,
  error: {},
  pending: false,
};

export const getUserThunk = createAsyncThunk(
  "get-user",
  async (token?: string) => {
    try {
      const response = await axios.get(`${API}/user?auth_key=${token}`, {});
      return response.data;
    } catch (error) {
      let message;
      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message;
        throw new Error(message);
      } else {
        throw new Error("Не получить профиль :(").message;
      }
    }
  }
);

export const getUserSlice = createSlice({
  name: "get-user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserThunk.pending, (state) => {
      state.pending = true;
      state.error = {};
    }),
      builder.addCase(getUserThunk.fulfilled, (state, action) => {
        (state.pending = false), (state.profile = action.payload);
        state.error = {};
      }),
      builder.addCase(getUserThunk.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});
