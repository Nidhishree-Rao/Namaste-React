import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;  // Increase quantity if already in cart
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); // Add with quantity 1
            }
        },
        removeItems: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1; // Decrease quantity
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload.id); // Remove item if 0
                }
            }
        },
        clearCart: (state) => {
            state.items = []; // Empty the cart
        },
    },
});

// Export actions
export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
