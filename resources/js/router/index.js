import Vue from 'vue'
import Router from 'vue-router'
import store from "../store.js";
import Home from '../components/Home'
import Login from "../components/auth/Login";
import Register from '../components/auth/Register'
import Profile from "../components/Profile.vue"
import Logout from "../components/auth/Logout"
// const DefaulConainer = () => import("@/containers/DefaultContainer");
Vue.use(Router)

let router = new Router({
  mode: "hash", // Demo is living in GitHub.io, so required!
  linkActiveClass: "open active",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
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
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(store.getters.isLoggedIn);
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
