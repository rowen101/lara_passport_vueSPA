import Vue from 'vue'
import Router from 'vue-router'
import store from "../store.js";
import Home from '../components/Home'
import Login from "../components/auth/Login";
import Register from '../components/auth/Register'
import Profile from "../components/Profile.vue"
import Logout from "../components/auth/Logout"
import LandingPage from '../components/marketing/LandingPage'
// const DefaulConainer = () => import("@/containers/DefaultContainer");
Vue.use(Router)

let router = new Router({

  routes: [
    {
      path: '/',
      // name: 'landingpage',
      component: LandingPage,
     
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: {
        requiresAuth: true
      }
    },



    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        requiresVisitor : true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta:{
        requiresVisitor : true
      }
    },
  ]
});



export default router;
