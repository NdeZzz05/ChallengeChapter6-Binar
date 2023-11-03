import http2 from "../../utils/http2";
import { API_ENDPOINT } from "../../utils/api-endpoint";

export const reduxRegisterUser = async (input) => {
  return await http2.post(API_ENDPOINT.REGISTER_USER, input);
};
