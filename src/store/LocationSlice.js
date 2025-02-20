import {createSlice} from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    latitude: null,
    longitude: null,
  },
  reducers: {
    setLocationStore: (state, action) => {
      console.log('action', action.payload);
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const {setLocationStore} = locationSlice.actions;
export default locationSlice.reducer;
