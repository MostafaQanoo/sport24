import axiosRequest from "./request";

export const getToken = (data) => axiosRequest("post", "oauth/token", data);
export const getFormation = (data) =>
  axiosRequest("get", "matches/lineups?match_id=78476");
