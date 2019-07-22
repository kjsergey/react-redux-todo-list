import axios from "axios";

export default axios.create({
  baseURL: "https://trails-todo.herokuapp.com/api/",
  responseType: "json"
});
