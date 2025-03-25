import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fcmToken: null,
};

const fcmSlice = createSlice({
  name: 'fcm',
  initialState,
  reducers: {
    setFcmToken: (state, action) => {
      console.log("token inside setFcmToken",action.payload);
      state.fcmToken = action.payload;
    },
  },
});

export const { setFcmToken } = fcmSlice.actions;

export const selectFcmToken = (state) => state.fcm.fcmToken;

export default fcmSlice.reducer;