import axiosWithAuth from "./axiosWithAuth";

const fetchColors = () => {
  return axiosWithAuth()
    .get("/colors")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default fetchColors;