import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../utlis/Api";

 export const getNearPropertiesFunc = createAsyncThunk('properties/getNearProperties' , async (data) =>{
    try {
        const res = await api.get('getNearProperties' , {params : data})
        return {
            status: res.data.success,
            message:res.data.message,
            response: res.data.data[0]?.data
        }
    } catch (error) {
        console.log("error getNearPropertiesFunc" , error)
    }
})

let initialState = {
    loading : false,
    data : []
}
const getPropertiesSlice = createSlice({
    name: 'NearProperties',
    initialState: initialState,
    reducers: {
        setLikeUnlike(state , action){
         state.data =   state.data.map(item =>
                    item._id === action.payload?.propertyId
                      ? {...item, isLiked: action?.payload?.isLiked}
                      : item,
                  )
        }
    },

    extraReducers(builder) {
        builder.addCase(getNearPropertiesFunc.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getNearPropertiesFunc.fulfilled, (state, action) => {
            state.loading = false
            state.data = action?.payload?.response

        })
    },
  });
export const {
setLikeUnlike
} = getPropertiesSlice.actions;
  export default getPropertiesSlice.reducer;