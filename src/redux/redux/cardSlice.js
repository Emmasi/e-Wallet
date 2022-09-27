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
    id:1,
    active:true}
  ],
    latestId:1,
  },
  reducers:{
    addCard: (state, action) => {
      state.cardList.push(action.payload);
      state.latestId += 1;
      state.active = false;
    },
    deleteCard: (state, action) => {
      state.cardList = state.cardList.filter((card) => card.id !== action.payload);
    },
    activeCard:(state,action)=>{
      console.log("hej aktivkort")
    },
  },
})
export const { addCard, deleteCard, activeCard} = cardsSlice.actions;
export default cardsSlice.reducer;
