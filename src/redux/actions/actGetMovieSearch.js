import { reduxGetMovieSearch } from "../../services/get-data-movie-Search-V4";
import { setSearch } from "../reducers/movie/getMovieSearch";

export const actGetMovieSearch = (query) => async (dispatch) => {
  reduxGetMovieSearch(query)
    .then((result) => {
      dispatch(setSearch(result?.data?.data));
    })
    .catch((err) => {
      if (err.response.status === 401) {
        window.location.href = "/";
      }
    });
};
