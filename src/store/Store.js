import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./AuthSlice" // Import the reducer

const store = configureStore({
  reducer: {
    auth: authReducer, // Register the auth reducer
  },
});

export default store;
