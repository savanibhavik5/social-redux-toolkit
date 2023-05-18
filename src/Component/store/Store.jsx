import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./PostSlice";
import userReducer from "./UserSlice";
const Store = configureStore({
  reducer: {
    userdetail: userReducer,
    post: postReducer,
  },
});

export default Store;
