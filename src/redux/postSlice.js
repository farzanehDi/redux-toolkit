import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {getAllPost} from "../api";

export const getPost=createAsyncThunk('fetchPosts',getAllPost);

const initialState={
    postList:[],
    loading:false,
    errMsg:''
}
export const postSlice=createSlice({
    name:"post",
    initialState,
    extraReducers:{
        [getPost.fulfilled]:(state,action)=>{
            state.postList=action.payload;
            state.loading=false;
        },
        [getPost.pending]:(state)=>{

            state.loading=true;

        },
        [getPost.rejected]:(state)=>{
            state.loading=false;
            state.errMsg='خطا در دریافت اطلاعات';
        }
    }

})

export default postSlice.reducer;
