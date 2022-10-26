import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
import postReducer from "../redux/postSlice";
import loadingReducer from "../redux/loadingSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        post:postReducer,
        loading:loadingReducer
    }
})