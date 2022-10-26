import {createSlice} from "@reduxjs/toolkit";


const initialState={
    value:false
}

const loadingSlice=createSlice({
    name:"loading",
    initialState,
    reducers:{
        startLoading:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {startLoading}=loadingSlice.actions;
export default loadingSlice.reducer;