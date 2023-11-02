import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataVideoDetailsV4 = async ({ id }) => {
  const { data } = await http.get(`${API_ENDPOINT.VIDEO_DETAILS}${id}/videos?language=en-US`);
  return data;
};

const useDataVideoDetails = (options) => {
  return useQuery(["videoDetails", options], () => fetchDataVideoDetailsV4(options));
};

export { fetchDataVideoDetailsV4, useDataVideoDetails };
