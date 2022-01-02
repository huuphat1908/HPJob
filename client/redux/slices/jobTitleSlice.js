import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import jobTitleApi from '../../api/jobTitleApi';

export const getAllJobTitle = createAsyncThunk('jobTitle/getAllJobTitle', async () => {
  const data = await jobTitleApi.getAllJobTitle();
  return data;
});

export const jobTitleSlice = createSlice({
  name: 'jobTitle',
  initialState: {
    current: []
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobTitle.fulfilled, (state, action) => {
        state.current = [ ...action.payload ];
      })
  }
});

/* export const {  } = jobTitleSlice.actions; */

export default jobTitleSlice.reducer;