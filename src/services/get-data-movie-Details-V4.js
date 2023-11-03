import { API_ENDPOINT } from "../utils/api-endpoint";
import http2 from "../utils/http2";

export const reduxGetMovieDetails = async (id) => {
  return await http2.get(API_ENDPOINT.DETAILS_BINAR + id);
};
