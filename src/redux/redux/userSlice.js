import {createSlice } from '@reduxjs/toolkit';
import getUser from './usersAPI';



export const userSlice = createSlice({
  name:"userSlice",
  initialState:{
    user:{
    title:null,
    first:null,
    last:null},
    error:null,
    loading:false
  },
  reducers:{  },
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = 'succeeded'
        state.user = action.payload.results[0].name
        state.loading=false
      })
      .addCase(getUser.rejected, (state, action) => {
        state.user = 'failed'
        state.loading = false
        state.error=action.error.message
      })
  }
})
export const{createUser}=userSlice.actions
export default userSlice.reducer;