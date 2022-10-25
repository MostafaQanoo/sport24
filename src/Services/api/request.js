import axios from "axios";

const api = axios.create({
  baseURL: "https://scoresapi.so3ody.com/api/v1",
});

const axiosRequest = async (method, url, data = null, params = null) => {
  const config = {
    method,
    url,
    headers: {
      authorization: `Bearer ${JSON.parse(localStorage.getItem("token")) || ""}`,
      "Content-Type": "application/json",
    },
    data,
    params,
  };

  try {
    return await api(config);
  } catch (error) {
    return error;
  }
};

export default axiosRequest;
