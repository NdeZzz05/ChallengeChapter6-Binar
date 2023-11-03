import { combineReducers } from "redux";
import authLogin from "./auth/authLogin";
import getMoviePopular from "./movie/getMoviePopular";
import getMovieDetails from "./movie/getMovieDetails";
import getMovieSearch from "./movie/getMovieSearch";
import authGetUser from "./auth/authGetUser";
import authRegister from "./auth/authRegister";

export default combineReducers({
  authLogin: authLogin,
  authRegister: authRegister,
  authGetUser: authGetUser,
  getMoviePopular: getMoviePopular,
  getMovieDetails: getMovieDetails,
  getMovieSearch: getMovieSearch,
});
