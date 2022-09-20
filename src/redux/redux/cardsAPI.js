import { createAsyncThunk } from '@reduxjs/toolkit';

export const getcards = createAsyncThunk("activity/getActivity"), async = ()=>{
  return fetch(` https://randomuser.me/api/`)
  .then((res)=>res.json())

}
