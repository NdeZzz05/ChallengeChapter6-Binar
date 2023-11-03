import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieSearch: [],
};

const getMovieSearch = createSlice({
  name: "getMovieSearch",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.movieSearch = action.payload;
    },
  },
});

export const { setSearch } = getMovieSearch.actions;

export default getMovieSearch.reducer;
