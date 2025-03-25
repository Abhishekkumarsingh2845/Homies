import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '', // Initial string value
};

const FoodColor = createSlice({
  name: 'foodColor',
  initialState,
  reducers: {
    setString: (state, action) => {
      state.value = action.payload; // Update the string value
    },
  },
});

export const { setString } = FoodColor.actions;
export default FoodColor.reducer;
