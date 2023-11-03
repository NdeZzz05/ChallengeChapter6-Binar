import { reduxGetMoviePop } from "../../services/get-data-movie-Popular-V4";
import { setPopular } from "../reducers/movie/getMoviePopular";

export const actGetMoviePopular = () => async (dispatch) => {
  reduxGetMoviePop()
    .then((result) => {
      dispatch(setPopular(result?.data?.data));
    })
    .catch((err) => {
      if (err.response.status === 401) {
        window.location.href = "/";
      }
    });
};
