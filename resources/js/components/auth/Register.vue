<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="regiter">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          <div class="form-group">
            <label for="fname">First Name</label>
            <input
              type="text"
              v-model="fname"
              class="form-control"
              name="fname"
              placeholder="First Name"
            />
          </div>
          <div class="form-group">
            <label for="lname">Last Name</label>
            <input
              type="text"
              v-model="lname"
              class="form-control"
              name="lname"
              placeholder="Last Name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="passowrd">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              name="password"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="passowrd">Confirmed Password</label>
            <input
              type="password"
              v-model="c_password"
              class="form-control"
              name="password"
              placeholder="Password"
            />
          </div>
          <button class="btn btn-lg btn-primary btn-block">Register</button>
        </form>
      </div>
    </div>
  
  </div>
</template>
<script>
import api from '../../services/api'
// import router from '../../router'
// import miniToastr from "mini-toastr";
// import EventBus from './EventBus'
export default {
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      password: "",
      c_password:""
    };
  },
  methods: {
    regiter() {
      api.instance
        .post("register", {
          name: this.fname + " " + this.lname,
          email: this.email,
          password: this.password,
          c_password: this.c_password
        })
        .then(res => {
          console.log(res);
          this.$router.push({ name: 'Login', res});
        })
        .catch(error => {
          console.log(error);
         
        });
    }
  }
};
</script>