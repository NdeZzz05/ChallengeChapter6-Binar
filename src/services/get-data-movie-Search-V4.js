import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http2 from "../utils/http2";

const fetchDataSearchV4 = async ({ query }) => {
  const { data } = await http2
    .get(`${API_ENDPOINT.SEARCH_BINAR}movie?query=${query}&include_adult=false&language=en-US&page=1`)
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

const useDataSearchV4 = (options) => {
  return useQuery(["dataSearch", options], () => fetchDataSearchV4(options));
};

export { fetchDataSearchV4, useDataSearchV4 };
