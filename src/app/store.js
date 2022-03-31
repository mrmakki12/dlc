import { configureStore } from '@reduxjs/toolkit';
// reducers
import cartSlice from '../Components/Cart/cartSlice';

export const store = configureStore({

  reducer: {
    cart: cartSlice
  },
});
