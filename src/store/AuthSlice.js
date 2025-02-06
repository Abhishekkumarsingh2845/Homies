import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isExist: false,
    token: null,
    phoneNo: null,
    email: null, // Add email field
  },
  reducers: {
    setExist(state, action) {
      state.isExist = action.payload;
    },
    resetExist(state) {
      state.isExist = false;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = null;
    },
    setPhone(state, action) {
      state.phoneNo = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    clearEmail(state) {

      state.email = null;
    },
  },
});

// Export the actions
export const {
  setExist,
  resetExist,
  setToken,
  clearToken,
  setPhone,
  setEmail,
  clearEmail,
} = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
