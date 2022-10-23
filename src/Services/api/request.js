import axios from "axios";

const api = axios.create({
  baseURL: 'https://scoresapi.so3ody.com/',
});

const axiosRequest = async (method, url, data = null) => {
  const config = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
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