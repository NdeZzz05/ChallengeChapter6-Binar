import { createSlice } from "@reduxjs/toolkit";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";

const initialState = {
  token: CookieStorage.get(CookieKeys.AuthToken) || undefined,
  isLogin: "",
  user: "",
};

const authLogin = createSlice({
  name: "authLogin",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLogin = { ...state.isLogin, isLogin: action.payload };
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn, setUser } = authLogin.actions;

export default authLogin.reducer;
