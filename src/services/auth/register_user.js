import { useMutation } from "@tanstack/react-query";
import http2 from "../../utils/http2";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const RegisterUser = async (input) => {
  return await http2
    .post(API_ENDPOINT.REGISTER_USER, input)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};

const useCreateUser = () => {
  return useMutation(RegisterUser);
};

export { RegisterUser, useCreateUser };
