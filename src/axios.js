import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://chart-js-project-backend.herokuapp.com/",
});

export default instance;
