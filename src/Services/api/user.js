import axiosRequest from './request';

export const getToken = (data) => axiosRequest('post', '/api/v1/oauth/token', data);