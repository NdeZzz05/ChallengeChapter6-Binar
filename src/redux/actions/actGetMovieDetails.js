import { reduxGetMovieDetails } from "../../services/get-data-movie-Details-V4";
import { setDetails } from "../reducers/movie/getMovieDetails";

export const actGetMovieDetails = (id) => async (dispatch) => {
  reduxGetMovieDetails(id)
    .then((result) => {
      dispatch(setDetails(result?.data?.data));
      console.log(id, "id");
    })
    .catch((err) => {
      if (err.response.status === 401) {
        window.location.href = "/";
      }
    });
};
