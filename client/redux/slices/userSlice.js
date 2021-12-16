import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

const signIn = createAsyncThunk('user/signIn', async(data, thunkAPI) => {
  const token = await userApi.signIn();
  return token;
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    data: [],
    loading: false
  },
  reducers: {
    increment(state) {
      state.token = 'Haha'
    }
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;