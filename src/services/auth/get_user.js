import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";

export const reduxGetUser = async () => {
  return await http2.get(API_ENDPOINT.GET_USER);
};
