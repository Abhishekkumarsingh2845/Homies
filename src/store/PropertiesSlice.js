import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../utlis/Api';

export const getNearPropertiesFunc = createAsyncThunk(
  'properties/getNearProperties',
  async data => {
    try {
      console.log("getNearProperties body----------", data)
      const res = await api.get('getNearProperties', { params: data });
      console.log("getNearProperties response--------------", JSON.stringify(res.data.data))
      return {
        status: res.data.success,
        message: res.data.message,
        response: res.data.data[0]?.data,
      };
    } catch (error) {
      console.log('getNearPropertiesFunc error=================', error);
    }
  },
);

let initialState = {
  loading: false,
  data: [],
};
const getPropertiesSlice = createSlice({
  name: 'NearProperties',
  initialState: initialState,
  reducers: {
    clearProperties: (state) => {
      return {
        loading: false,
        data: [],
      }
    },
    setLikeUnlike(state, action) {
      state.data = state.data.map(item =>
        item._id === action.payload?.propertyId
          ? { ...item, isLiked: action?.payload?.isLiked }
          : item,
      );
    },
  },

  extraReducers(builder) {
    builder.addCase(getNearPropertiesFunc.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getNearPropertiesFunc.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action?.payload?.response;
      // console.log("Redux Stored Data:", state.data); 
    });
  },
});
export const { setLikeUnlike , clearProperties} = getPropertiesSlice.actions;
export default getPropertiesSlice.reducer;
