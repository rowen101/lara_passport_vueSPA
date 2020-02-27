import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import api from "./services/api";
// import createPersistedState from "vuex-persistedstate";
import miniToastr from "mini-toastr";

miniToastr.init();
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem('token') || null,
    user: "",
    id: ""
  },
  // plugins:[createPersistedState()],
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, data) {
      state.status = "success";
      state.token = data.token;
      state.user = data.name;
      state.id = data.id;
    },
    auth_error(state) {
      state.status = "error";
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    email(state, email) {
      state.email = email;
    },
    destroyToken(state) {
      state.token = null
    }
  },
  actions: {
    login({ commit }, userparam) {
      return new Promise((resolve, reject) => {
        commit("auth_request");

        axios({
          url: api.baseURL + "login",
          data: userparam,
          method: "POST"
        })
          .then(resp => {
            //authenticate

            console.log(resp.data)
            const token = resp.data.data.token;
           
            const data = resp.data.data;
            localStorage.setItem('token', token)
            commit('auth_success', data)
            resolve(resp)
          })
          .catch(err => {
            miniToastr.error("Login Failed");
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    destroyToken(context) {
      if (context.getters.isLoggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('logout')
            .then(response => {
              localStorage.removeItem('token')
              context.commit('destroyToken')
              resolve(response)
            })
            .catch(error => {
              localStorage.removeItem('token')
              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.token != null
    },
    authStatus: state => state.status,
    token: state => state.token,
  }
});