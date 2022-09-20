import {createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk("activity/getActivity"), async = ()=>{
  return fetch(` https://randomuser.me/api/`)
  .then((res)=>{res.json()
    console.log(res.json)})
  .catch((e)=> {return console.error(e.message)})
}

export const cardsSlice = createSlice({
  name:"activity",
  initialState:{
    user:null,
    cards:[],
    dumdata:[
    {name:'Elsa',
    lastname:'Andersson',
    number:1233021032510412,
    typ:'master'},
    {name:'Elsa',
    lastname:'Andersson',
    number:7000111122223333,
    typ:'Visa'}
    ]
  },
  reducers:{
    getUser:(state,action)=>{
      state.user=action.payload;
      state.isLoading=false;
    }
    //action
    //add new card delete m.m
  },
  extraReducers:{
    //ändrar på statet beroende på action
    [getUser.fulfilled]:(state,action)=>{
      state.user = action.payload;
      console.log(action.payload)
    }
  },
  //laddar
  [getUser.pending]: (state, action) => {
    state.status = "Loading data...";
  },
  //hittar inte api ex
  [getUser.rejected]: (state, action) => {
    state.status = "Failed to get data";
  },

})

export default cardsSlice.reducer;
