import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http2 from "../utils/http2";

const fetchDataPopular = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http2
    .get(_key, { params: _params })
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

const useDataPopular = (options) => {
  return useQuery([API_ENDPOINT.POPULAR_BINAR, options], fetchDataPopular);
};

export { fetchDataPopular, useDataPopular };
