import {createSlice} from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    name : '',
    latitude: null,
    longitude: null,
  },
  reducers: {
    clearLocation :(state) =>{
      return {
        name : '',
        latitude: null,
        longitude: null,
      }
    },
    setLocationStore: (state, action) => {
      console.log('action', action.payload);
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.name = action.payload?.name
    },
  },
});

export const {setLocationStore , clearLocation} = locationSlice.actions;
export default locationSlice.reducer;
