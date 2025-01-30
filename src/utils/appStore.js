import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: { //this is a whole big reducer, our app reducer, inside which we have small reducer
        cart : cartReducer,
           },
}
  
);


export default appStore;