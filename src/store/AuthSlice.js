// import {createSlice} from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isExist: false,
//     token: null,
//     phoneNo: null,
//     email: null, // Add email field
//   },
//   reducers: {
//     setExist(state, action) {
//       state.isExist = action.payload;
//     },
//     resetExist(state) {
//       state.isExist = false;
//     },
//     setToken(state, action) {
//       state.token = action.payload;
//     },
//     clearToken(state) {
//       state.token = null;
//     },
//     setPhone(state, action) {
//       state.phoneNo = action.payload;
//     },
//     setEmail(state, action) {
//       state.email = action.payload;
//     },
//     clearEmail(state) {
//       state.email = null;
//     },
//   },
// });


// export const {
//   setExist,
//   resetExist,
//   setToken,
//   clearToken,
//   setPhone,
//   setEmail,
//   clearEmail,
// } = authSlice.actions;


// export default authSlice.reducer;
import { createSlice, current } from '@reduxjs/toolkit';
const initialState ={
  user : {
    token : null,
    isExist : false,
  }
}
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    clearUser(state , action) {
      console.log("clear user**********************" , current(state))
      state.user = {
          token : null,
          isExist : false,
        
      }
    },
    setUser(state, action) {
      console.log("action ===============" , action.payload)
      let data = action.payload.data
      state.user = {
        user_id : data?.user_id,
        phone :  data?.phone,
        profileImage : data?.profileImage,
        name : data?.name,
        email : data?.email,
        token : data?.jwtToken
      };
    },
    // resetExist(state) {
    //   state.isExist = false;
    // },
    // setToken(state, action) {
    //   state.token = action.payload;
    // },
    // clearToken(state) {
    //   state.token = null;
    // },
    // setPhone(state, action) {
    //   state.phoneNo = action.payload;
    // },
    // setEmail(state, action) {
    //   state.email = action.payload;
    // },
    // clearEmail(state) {
    //   state.email = null;
    // },
    // setName(state, action) { 
    //   state.name = action.payload; 
    // }, 
    // clearName(state) { 
    //   state.name = null; 
    // }, 
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
  clearName ,
  setUser,
  clearUser
} = authSlice.actions;

export default authSlice.reducer;