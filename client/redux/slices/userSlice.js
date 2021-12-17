import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import jwt_decode from 'jwt-decode';

import userApi from '../../api/userApi';

export const signIn = createAsyncThunk('user/signIn', async ({ email, password }) => {
  const data = await userApi.signIn(email, password);
  return data;
});

export const checkToken = createAsyncThunk('user/checkAuthenticated', async () => {
  const token = await SecureStore.getItemAsync('token');
  if (token) {
    
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    token: '',
    current: {},
    loading: false
  },
  reducers: {
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

export const { saveUserInfo } = userSlice.actions;

export default userSlice.reducer;