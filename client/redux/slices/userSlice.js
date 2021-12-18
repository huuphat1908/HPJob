import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

import userApi from '../../api/userApi';

export const signIn = createAsyncThunk('user/signIn', async ({ email, password }) => {
  const data = await userApi.signIn(email, password);
  return data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    token: '',
    current: {},
    loading: false
  },
  reducers: {
    persistLogin(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    saveUserInfo(state) {
      const decodedToken = jwt_decode(state.token);
      state.current = {...decodedToken};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
  }
});

export const { saveUserInfo, persistLogin } = userSlice.actions;

export default userSlice.reducer;