import { API_ENDPOINT } from "../utils/api-endpoint";
import http2 from "../utils/http2";

export const reduxGetMovieSearch = async (query) => {
  return await http2.get(`${API_ENDPOINT.SEARCH_BINAR}movie?query=${query}&include_adult=false&language=en-US&page=1`);
};
