import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import jobTitleReducer from './slices/jobTitleSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        jobTitle: jobTitleReducer,
    },
});

export default store;