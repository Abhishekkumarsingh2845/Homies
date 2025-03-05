import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  propertyId: null,
  landlordId: null,
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setPropertyId: (state, action) => {
      state.propertyId = action.payload;
    },
    setLandlordId: (state, action) => {
      state.landlordId = action.payload;
    },
    resetProperty: state => {
      state.propertyId = null;
      state.landlordId = null;
    },
  },
});

export const {setPropertyId, setLandlordId, resetProperty} =
  propertySlice.actions;
export default propertySlice.reducer;
