"use client";
import {
  SerializedError,
  createAsyncThunk,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../API";

export type IResponseError = {
  data: {
    message: string;
  };
};

interface IEducation {
  _id: string;
  content: string;
  name: string;
  test: ITest[];
}

interface ITest {
  answer: string;
  number: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
  };
}

interface IState {
  education: IEducation[];
  currentEducation: IEducation;
  error: SerializedError;
  pending: boolean;
}

const initialState: IState = {
  education: [],
  currentEducation: {} as IEducation,
  error: {},
  pending: false,
};

export const getEducationRoleThunk = createAsyncThunk(
  "get-role-education",
  async (role: string) => {
    try {
      const response = await axios.get(`${API}/tasks?role=${role}`, {});
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
  }
);

export const getEducationThunk = createAsyncThunk("get-education", async () => {
  try {
    const response = await axios.get(`${API}/alltasks`, {});
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

export const getCurrentEducationThunk = createAsyncThunk(
  "get-current-education",
  async (id: string) => {
    try {
      const response = await axios.get(`${API}/tasks/${id}`, {});
      return response.data;
    } catch (error) {
      let message;
      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message;
        throw new Error(message);
      } else {
        throw new Error("Не удалось получить тесты :(").message;
      }
    }
  }
);

export const getEducationSlice = createSlice({
  name: "get-education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(getEducationRoleThunk.pending), (state) => {
      state.pending = true;
      state.error = {};
    }),
      builder.addMatcher(
        isAnyOf(getEducationRoleThunk.fulfilled),
        (state, action) => {
          (state.pending = false), (state.education = action.payload);
          state.error = {};
        }
      ),
      builder.addMatcher(
        isAnyOf(getEducationRoleThunk.rejected),
        (state, action) => {
          state.error = action.error;
          state.pending = false;
        }
      );
    builder.addMatcher(isAnyOf(getCurrentEducationThunk.pending), (state) => {
      state.pending = true;
      state.error = {};
    }),
      builder.addMatcher(
        isAnyOf(getCurrentEducationThunk.fulfilled),
        (state, action) => {
          (state.pending = false), (state.currentEducation = action.payload);
          state.error = {};
        }
      ),
      builder.addMatcher(
        isAnyOf(getCurrentEducationThunk.rejected),
        (state, action) => {
          state.error = action.error;
          state.pending = false;
        }
      );
    builder.addMatcher(isAnyOf(getEducationThunk.pending), (state) => {
      state.pending = true;
      state.error = {};
    }),
      builder.addMatcher(
        isAnyOf(getEducationThunk.fulfilled),
        (state, action) => {
          (state.pending = false), (state.education = action.payload);
          state.error = {};
        }
      ),
      builder.addMatcher(
        isAnyOf(getEducationThunk.rejected),
        (state, action) => {
          state.error = action.error;
          state.pending = false;
        }
      );
  },
});
