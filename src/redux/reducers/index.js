import { combineReducers } from "redux";
import authLogin from "./auth/authLogin";
import getMoviePopular from "./movie/getMoviePopular";
import getMovieDetails from "./movie/getMovieDetails";
import getMovieSearch from "./movie/getMovieSearch";
import authGetUser from "./auth/authGetUser";

export default combineReducers({
  authLogin: authLogin,
  authGetUser: authGetUser,
  getMoviePopular: getMoviePopular,
  getMovieDetails: getMovieDetails,
  getMovieSearch: getMovieSearch,
});
