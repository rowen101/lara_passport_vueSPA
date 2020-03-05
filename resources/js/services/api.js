import axios from "axios";
import miniToastr from "mini-toastr";
miniToastr.init();
const baseURL = "http://laradmin.test/api/"; //local development
//const baseURL = "http://127.0.0.1:8000/api/"; //production

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json"
  }
});

instance.interceptors.request.use(
  async config => {
    const userToken = await localStorage.getItem("token");


    if (userToken != null) {
      config.headers.token = userToken;
    
    }

    return config;
  },
  error => Promise.reject(error)
);

function httpMsg(obj, statuscode, msg) {
  if (statuscode === 401) {
    obj.$store.dispatch("logout").then(() => {
      obj.$router.push("/login");
    });
  } else if (statuscode === 200) {
    miniToastr.success(msg);
  } else if (statuscode === undefined) {
    miniToastr.error("Please contact administrator!!!");
  } else {
    miniToastr.error(msg);
  }
}

export default {
  instance,
  baseURL,
  httpMsg
};
