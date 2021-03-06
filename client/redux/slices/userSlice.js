import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import userApi from '../../api/userApi';

export const signUp = createAsyncThunk('user/signUp', async ({ username, email, password }) => {
  const data = await userApi.signUp(username, email, password);
  return data;
});

export const signIn = createAsyncThunk('user/signIn', async ({ email, password }) => {
  const data = await userApi.signIn(email, password);
  return data;
});

export const getUserInfo = createAsyncThunk('user/getInfo', async() => {
  const data = await userApi.getUserInfo();
  return data;
})

export const modifyUser = createAsyncThunk('user/modify', async(data,) => {
  const modifiedUser = await userApi.modifyUser(data);
  return modifiedUser;
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    current: {},
    loading: false
  },
  reducers: {
    persistLogin(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.current = {...action.payload};
      })
      .addCase(modifyUser.fulfilled, (state, action) => {
        state.current = {...action.payload};
      })
  }
});

export const { persistLogin, logout } = userSlice.actions;

export default userSlice.reducer;