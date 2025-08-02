import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const recipe = action.payload; // Getting Data from user
      state.items.push(recipe); // Pushing item into the store
    },
    removeFromWishlist : (state , action) =>{
      const recipe = action.payload // Getting data from user
      state.items = state.items.filter(item => item.id !== recipe) // Removing items from store
    }
  },
});

export const { addToWishlist , removeFromWishlist} = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
