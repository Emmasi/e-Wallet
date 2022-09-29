import { createAsyncThunk } from "@reduxjs/toolkit";

const getUser = createAsyncThunk("userSlice/createUser", async () => {
  const res = await fetch(` https://randomuser.me/api/`);
  const json = await res.json();
  return json;
});

export default getUser;
