import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import api from "./services/api";
import createPersistedState from "vuex-persistedstate";
import miniToastr from "mini-toastr";

miniToastr.init();
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem('token') || null,
    
    id: ""
  },
  plugins:[createPersistedState()],
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token) {
      state.status = "success";
      state.token = token;
    },
    auth_user(state, id){
      state.id = id
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
      state.status = ""
      state.id =""
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
            axios.defaults.headers.common["Authorization"] =
              " Basic " + resp.data.data.token;

              //authorize

            console.log(resp.data)
            const token = resp.data.data.token;
           
           
            const id = resp.data.data.id;
            localStorage.setItem('token', token)
            commit('auth_success', token)
            commit('auth_user', id)
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
    destroyToken(context, userparam) {
     
        return new Promise((resolve, reject) => {
          axios({
            url:api.baseURL + 'logout',
            data:userparam,
            method:'Post'
          })
            .then(response => {
              localStorage.removeItem('token')
              context.commit('destroyToken')
              delete axios.defaults.headers.common["Authorization"];
             
              resolve(response)
            })
            .catch(error => {
              localStorage.removeItem('token')
              context.commit('destroyToken')
              reject(error)
            })
        })
      
    }
  },
  getters: {
    // isLoggedIn(state) {
    //   return state.token != null
    // },
    isLoggedIn: state => state.token,
    authStatus: state => state.status,
    token: state => state.token,
  }
});