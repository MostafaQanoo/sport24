import axios from "axios";

const api = axios.create({
  baseURL: 'https://scoresapi.so3ody.com/api/v1',
});

const axiosRequest = async (method, url, data = null) => {
  const config = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem('token').split('"')[1]}`,
    },
    data
  };

  try {
    return await api(config);
  } catch (error) {
    return error;
  }
};

export default axiosRequest;