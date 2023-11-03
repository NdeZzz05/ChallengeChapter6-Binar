import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";

export const reduxLoginUser = async (input) => {
  return await http2.post(API_ENDPOINT.LOGIN_USER, input);
};
