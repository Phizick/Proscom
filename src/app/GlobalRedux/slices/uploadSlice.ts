import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../API";

const initialState = {
  work: {},
  pending: false,
  error: {},
};

export const uploadThunk = createAsyncThunk(
  "upload-file",
  async (data: any) => {
    try {
      const formData = new FormData();
      formData.append("file", data, data.name);

      const response = await axios.post(`${API}/upload`, formData);
      return response.data;
    } catch (error) {
      let message;
      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message;
        throw new Error(message);
      } else {
        throw new Error("Не отправить файл :(").message;
      }
    }
  }
);
export const uploadSlice = createSlice({
  name: "upload-file",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadThunk.pending, (state) => {
      (state.pending = true), (state.error = {});
    });
    builder.addCase(uploadThunk.fulfilled, (state, action) => {
      (state.pending = false), (state.error = {});
      state.work = action.payload;
    });
    builder.addCase(uploadThunk.rejected, (state, action) => {
      (state.pending = false), (state.error = action.error);
    });
  },
});
