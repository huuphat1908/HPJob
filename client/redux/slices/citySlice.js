import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import cityApi from '../../api/cityApi';

export const getAllCity = createAsyncThunk('city/getAllCity', async () => {
  const data = await cityApi.getAllCity();
  return data;
});

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    current: []
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCity.fulfilled, (state, action) => {
        state.current = [ ...action.payload ];
      })
  }
});

/* export const {  } = citySlice.actions; */

export default citySlice.reducer;