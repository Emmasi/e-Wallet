import {createSlice } from '@reduxjs/toolkit';


export const cardsSlice = createSlice({
  name:"cardSlice",
  initialState:{
    cardList:[
      {
    number:1233021032510412,
    type:'Master',
    date: '12okt',
    ccs: 885,
    id:1}
  ],

    latestId:1,
  },
  reducers:{
    addCard: (state, action) => {
      // const{}=action.payload;
      // state.cardList.push({cardnumber:cardnumber})
      state.cardList.push(action.payload);
      state.latestId += 1;
    },
    deleteCard: (state, action) => {
      state.cardList = state.cardList.filter((card) => card.id !== action.payload);
    },
  },
})
export const { addCard, deleteCard} = cardsSlice.actions;
export default cardsSlice.reducer;
