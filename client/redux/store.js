import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import jobTitleReducer from './slices/jobTitleSlice';
import cityReducer from './slices/citySlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        jobTitle: jobTitleReducer,
        city: cityReducer,
    },
});

export default store;