import {createSlice, current} from '@reduxjs/toolkit';
const initialState = {
  user: {
    token: null,
    isExist: false,
  },
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    clearUser(state, action) {
      console.log('clear user**********************', current(state));
      state.user = {
        token: null,
        isExist: false,
      };
    },
    setUser(state, action) {
      console.log('action ===============', action.payload);
      let data = action.payload.data;
      state.user = {
        user_id: data?.user_id,
        phone: data?.phone,
        profileImage: data?.profileImage,
        name: data?.name,
        email: data?.email,
        token: data?.jwtToken,
      };
    },
  },
});

export const {
  setExist,
  resetExist,
  setToken,
  clearToken,
  setPhone,
  setEmail,
  clearEmail,
  setName,
  clearName,
  setUser,
  clearUser,
} = authSlice.actions;

export default authSlice.reducer;
