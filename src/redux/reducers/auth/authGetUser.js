import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getUser: "",
};

const authGetUser = createSlice({
  name: "authGetUser",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.getUser = action.payload;
    },
  },
});
export const { setUser } = authGetUser.actions;
export default authGetUser.reducer;
