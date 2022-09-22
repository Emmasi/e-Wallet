import {createSlice } from '@reduxjs/toolkit';


export const cardsSlice = createSlice({
  name:"card",
  initialState:{
    cardList:[],
    // latestId:2,
  },
  reducers:{
    addCard: (state, action) => {
      // const{}=action.payload;
      // state.cardList.push({cardnumber:cardnumber})
      state.cardList.push(action.payload);
      // state.latestId += 1;
    },
    // deleteCard: (state, action) => {
    //   state.cardList = state.cardList.filter((card) => card.id !== action.payload);
    // },
  },
  //   extraReducers:{
//   //hittar inte api ex
//   [getUser.rejected]: (state, action) => {
//     state.status = "Failed to get data";
//   },
// }
})
export const { addCard, deleteCard} = cardsSlice.actions;
export default cardsSlice.reducer;
