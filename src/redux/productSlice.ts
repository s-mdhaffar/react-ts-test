import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Product from "../models/productModel";

// Action
export const getProducts = createAsyncThunk(
  "getProducts",
  async (data, { getState, rejectWithValue }) => {
    
    try {
      const { data } = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );
      return data;
    } catch (error:any) {
      rejectWithValue(error.response);
    }
  }
);

interface ProductState {
    loading:boolean;
    data:Product[] | null;
    error:null | string;
}

const initialState = {
    loading: false,
    data: null,
    error: null,
  } as ProductState;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getProducts.pending,(state, action) => {
        state.loading = true;
      }) 
    .addCase(getProducts.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading = false;
        state.data = action.payload;
    })
    .addCase(getProducts.rejected,(state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.error=action.payload;
    })
  },
});

export default productSlice;