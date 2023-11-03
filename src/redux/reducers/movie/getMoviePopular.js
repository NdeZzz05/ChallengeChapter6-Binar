import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviePopular: [],
};

const getMoviePopular = createSlice({
  name: "getMoviePopular",
  initialState,
  reducers: {
    setPopular: (state, action) => {
      state.moviePopular = action.payload;
    },
  },
});

export const { setPopular } = getMoviePopular.actions;

export default getMoviePopular.reducer;
