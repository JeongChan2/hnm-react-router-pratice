import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import authenticateSlice from './reducers/authenticateSlice';

const store = configureStore({
  reducer:{
    auth: authenticateSlice,
    product: productSlice,
  }
})

export default store;