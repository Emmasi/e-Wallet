import { configureStore } from '@reduxjs/toolkit';
import cardSlice from '../redux/redux/cardSlice';
import userSlice from '../redux/redux/cardSlice'

export const store = configureStore({
    reducer: {
      cardList: cardSlice, 
      user: userSlice
    }
});
