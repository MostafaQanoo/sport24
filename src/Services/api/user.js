import axiosRequest from './request';

export const getToken = (data) => axiosRequest('post', '/oauth/token', data);
export const getTeams = () => axiosRequest('get', '/teams');