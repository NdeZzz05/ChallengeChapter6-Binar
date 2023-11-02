import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http2 from "../utils/http2";

const fetchDataDetailsV4 = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http2
    .get(_key + _params.id)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      if (err.response.status === 401) {
        window.location.href = "/";
      }
    });
  return data;
};

const useDataDetails = (options) => {
  return useQuery([API_ENDPOINT.DETAILS_BINAR, options], fetchDataDetailsV4);
};

export { fetchDataDetailsV4, useDataDetails };
