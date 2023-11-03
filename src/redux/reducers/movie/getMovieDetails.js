import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieDetails: [],
};

const getMovieDetails = createSlice({
  name: "getMovieDetails",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export const { setDetails } = getMovieDetails.actions;

export default getMovieDetails.reducer;
