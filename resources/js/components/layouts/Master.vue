<template>
  <div id="app">
    <nav v-if="loggedIn" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li v-if="loggedIn" class="nav-tem">
            <router-link  class="nav-link" :to="{ name: 'Home'}">Home</router-link>
          </li>
          <li v-if="loggedIn" class="nav-tem">
            <router-link class="nav-link" :to="{ name: 'Profile'}">Profile</router-link>
          </li>
          
          <li v-if="!loggedIn" class="nav-tem">
            <router-link class="nav-link" :to="{ name: 'Login'}">Login</router-link>
          </li>
          <li v-if="!loggedIn" class="nav-tem">
            <router-link class="nav-link" :to="{ name: 'Register'}">Register</router-link>
          </li>
         
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
      
            <router-link v-if="loggedIn" class="btn btn-outline-success my-2 my-sm-0" :to="{ name: 'Logout'}">Logout</router-link>
         
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
    }
  },
 
  computed: {
    loggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  mounted() {}
};
</script>