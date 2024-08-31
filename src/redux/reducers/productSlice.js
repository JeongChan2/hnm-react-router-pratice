// function productReducer(state=initialState, action) {
//   let {type,payload} = action;

//   switch(type) {
//     case "GET_PRODUCT_SUCCESS":
//       return {...state, productList: payload.data};
//     default:
//       return {...state};
//   }
// }

// export default productReducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList:[],
  selectedItem: null,
  isLoading:false,
  error:null,
};

export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery,thunkApi)=> {
  try {
    const url = `https://my-json-server.typicode.com/JeongChan2/chan-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
})

export const fetchDetailProduct = createAsyncThunk('product/fetchDetail', async (id,thunkApi)=> {
  try {
    let url = `https://my-json-server.typicode.com/JeongChan2/chan-hnm/products/${id}`;
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
})

const productSlice = createSlice({
  name:"product",
  initialState,
  reducers:{
    // getSingleProduct(state,action) {
    //   state.selectedItem = action.payload.data;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading=true;
    })
    .addCase(fetchProducts.fulfilled,(state,action) => {
      state.isLoading=false;
      state.productList= action.payload;
    })
    .addCase(fetchProducts.rejected,(state,action) => {
      state.isLoading=false;
      state.error=action.payload
    })
    .addCase(fetchDetailProduct.pending, (state) => {
      state.isLoading=true;
      state.selectedItem = null;
    })
    .addCase(fetchDetailProduct.fulfilled,(state,action) => {
      state.isLoading=false;
      state.selectedItem = action.payload;
    })
    .addCase(fetchDetailProduct.rejected,(state,action) => {
      state.isLoading=false;
      state.error=action.payload
    })
  }
})

export const productActions = productSlice.actions;
export default productSlice.reducer