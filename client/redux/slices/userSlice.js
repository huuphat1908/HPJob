import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

export const signIn = createAsyncThunk('user/signIn', async(data, thunkAPI) => {
  const token = await userApi.signIn(data);
  return token;
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    user: [],
    loading: false
  },
  reducers: {
    increment(state) {
      state.token = 'Haha'
    }
  },
  extraReducers:  (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
    })
  }
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;