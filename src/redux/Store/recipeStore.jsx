import { configureStore } from "@reduxjs/toolkit";
import { wishlistReducer } from "../Slice/recipeSlice";


export const store = configureStore({
    reducer:{
        wishList : wishlistReducer,
    }
})