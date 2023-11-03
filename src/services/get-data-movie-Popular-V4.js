import { API_ENDPOINT } from "../utils/api-endpoint";
import http2 from "../utils/http2";

export const reduxGetMoviePop = async () => {
  return await http2.get(API_ENDPOINT.POPULAR_BINAR);
};
