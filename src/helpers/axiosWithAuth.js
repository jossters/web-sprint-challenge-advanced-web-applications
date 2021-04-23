import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token
const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    baseURL: "http://localhost:5000/api",
  });
};

export default axiosWithAuth;