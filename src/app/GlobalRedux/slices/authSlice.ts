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

interface IToken {
  auth_key: string;
}

interface IState {
  token: IToken;
  error: SerializedError;
  pending: boolean;
}

const initialState: IState = {
  token: {} as IToken,
  error: {},
  pending: false,
};

export const userRegisterThunk = createAsyncThunk(
  "get-token",
  async (data: {
    username: string;
    password: string;
    priority: string;
    role: string;
  }) => {
    try {
      const response = await axios.post(`${API}/register`, {
        username: data.username,
        password: data.password,
        priority: data.priority,
        role: data.role,
      });
      return response.data;
    } catch (error) {
      let message;
      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message;
        throw new Error(message);
      } else {
        throw new Error("Не удалось войти :(").message;
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegisterThunk.pending, (state) => {
      state.pending = true;
      state.error = {};
    }),
      builder.addCase(userRegisterThunk.fulfilled, (state, action) => {
        (state.pending = false), (state.token = action.payload);
        window.localStorage.setItem("token", action.payload.auth_key);
        state.error = {};
      }),
      builder.addCase(userRegisterThunk.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});
