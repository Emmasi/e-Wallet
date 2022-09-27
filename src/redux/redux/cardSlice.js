import {createSlice } from '@reduxjs/toolkit';


export const cardsSlice = createSlice({
  name:"cardSlice",
  initialState:{
    cardList:[
      {
    number:1452145214521452,
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
      const id = action.payload;
      state.cardList = state.cardList.map((x)=>{
        if(x.id != id){
        return {...x, active: false}
        }else{ return {...x, active: true}}

      })
    },
  },
})
export const { addCard, deleteCard, activeCard} = cardsSlice.actions;
export default cardsSlice.reducer;
