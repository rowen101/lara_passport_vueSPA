<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li v-if="loggedIn" class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home'}">Home</router-link>
        </li>
        <li v-if="!loggedIn" class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Login'}">Login</router-link>
        </li>
        <li v-if="!loggedIn" class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Register'}">Register</router-link>
        </li>
        <li v-if="loggedIn" class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Profile'}">Profile</router-link>
        </li>
        <li v-if="loggedIn" class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Logout'}">Logout</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      auth: "",
      user: ""
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
    }
  },
  computed:{
    loggedIn(){
      return this.$store.getters.loggedIn
    }
  },
  mounted() {
    
  }
};
</script>