import { configureStore } from '@reduxjs/toolkit';
import cardSlice from '../redux/redux/cardSlice';
import userSlice from '../redux/redux/userSlice';

export const store = configureStore({
    reducer: {
      card: cardSlice, 
      userSlice:userSlice
    }
});

