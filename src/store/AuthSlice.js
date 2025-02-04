import {createSlice} from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isExist: false,
    token: null,
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
  },
});

export const {setExist, resetExist, setToken, clearToken} = authSlice.actions;
export default authSlice.reducer;
