import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({

    name: 'cart',

    initialState: {
        items: []
    },

    reducers: {
        // add to cart
        addToCart: (state, action) => {
            // find item if it exist and update its quantity
            const index = state.items.findIndex((item) => {
                return item.name === action.payload.name;
            });
            if(index !== -1) {
                state.items[index].quantity++;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },

        removeFromCart: (state, action) => {
            // find item
            const item = state.items.find(dlc => {
                return dlc.name === action.payload.name;
            });
            // reduce quantity if > 0 else remove item
            if(item.quantity > 0) {
                item.quantity--;
            } else {
                state.items = state.items.filter(item => {
                    return item.name !== action.payload.name;
                });
            };
        }
    }
});

// selector 
export const selectCart = (state) => state.cart.items;

// actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// reducer
export default cartSlice.reducer;