import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from "../models/productModel";

interface ProductState {
    
    cart:Product[] | null;
    
}

const initialState = {
    
    cart: null,
    
  } as ProductState;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<Product>) => {
      const itemInCart = state.cart?.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart?.push({...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart?.find((item) => item.id === action.payload);
      if(item?.quantity){item.quantity++};
    },
    decrementQuantity: (state, action) => {
      const item = state.cart?.find((item) => item.id === action.payload);
      if (item?.quantity === 1) {
        item.quantity = 1
      } else {
        if(item?.quantity){item.quantity--};
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart?.filter((item) => item.id !== action.payload);
      if(removeItem) {state.cart = removeItem};
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;