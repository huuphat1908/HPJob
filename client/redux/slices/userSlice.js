import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const noteSlice = createSlice({
  name: 'counter',
  initialState: {
    noteList: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
});

export const { increment, decrement, incrementByAmount } = noteSlice.actions;

export default noteSlice.reducer;