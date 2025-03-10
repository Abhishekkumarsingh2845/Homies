import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../utlis/Api';

export const getMyProperty = createAsyncThunk(
  'property/getMyProperty',
  async () => {
    try {
      const res = await api.get('getUserProperty');
      console.log("sachin - - - - - - -" , res?.data)
      return {
        status: res.data.success,
        message: res.data.message,
        response: res.data?.data[0],
      };
    } catch (error) {
      console.log('error getNearPropertiesFunc', error);
    }
  },
);

let initialState = {
//   loading: false,
  data: [],
};
const MyPropertySlice = createSlice({
  name: 'myProperty',
  initialState: initialState,
  reducers: {
    clearMyProperty(state, action) {
      state.data = []
    },
  },

  extraReducers(builder) {
    builder.addCase(getMyProperty.fulfilled, (state, action) => {
      state.data = action?.payload?.response ;
    });
  },
});
export const {clearMyProperty}  = MyPropertySlice.actions
export default MyPropertySlice.reducer;
