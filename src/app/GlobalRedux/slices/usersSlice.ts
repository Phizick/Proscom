import {
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../API";

interface IUser {
  _id: string;
  username: string;
  priority: string;
  role: string;
}

interface IState {
  users: IUser[];
  error: SerializedError;
  pending: boolean;
}

const initialState: IState = {
  users: [],
  error: {},
  pending: false,
};

export const getUsersThunk = createAsyncThunk("get-users1", async () => {
  try {
    const response = await axios.get(`${API}/users`, {});
    return response.data;
  } catch (error) {
    let message;
    if (axios.isAxiosError(error) && error.response) {
      message = error.response.data.message;
      throw new Error(message);
    } else {
      throw new Error("Не получить пользователей :(").message;
    }
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.pending, (state) => {
      state.pending = true;
      state.error = {};
    }),
      builder.addCase(getUsersThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.users = action.payload;
        state.error = {};
      }),
      builder.addCase(getUsersThunk.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});
