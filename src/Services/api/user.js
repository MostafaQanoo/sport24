import axiosRequest from "./request";

export const getToken = (data) => axiosRequest("post", "/oauth/token", data);
export const getTeams = () => axiosRequest("get", "/teams");
export const getCompetitions = (params) => axiosRequest("get", `/competitions?${params}`);
export const getMatches = (params) => axiosRequest("get", `/matches?${params}`);
export const getFormation = (match_id) =>
  axiosRequest("get", `/matches/lineups?match_id=${match_id}`);
export const getHeadToHead = ({ teamA, teamB }) =>
  axiosRequest(
    "get",
    `/matches/headtohead?page=1&limit=20&headA_team_id=${teamA}&headB_team_id=${teamB}`
  );
export const getEvents = (match_id) =>
  axiosRequest("get", `/matches/events?match_id=${match_id}`);
