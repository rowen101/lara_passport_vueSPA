<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center loginForm">
        <div class="form-elegant">
          <div class="card border-none">
            <div class="card-body mx-4">
              <b-form>
                <div class="md-form">
                  <b-input-group class="mb-3">
                   
                    <b-form-input
                      type="text"
                      v-model="email"
                      class="form-control"
                      placeholder="Username"
                      autocomplete="username email"
                     
                    />
                  </b-input-group>
                </div>

                <div class="md-form pb-3 password">
                  <b-input-group class="mb-4">
                  
                    <b-form-input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      autocomplete="current-password"
                      v-model="password"
                    />
                  </b-input-group>

                 
                  <p class="font-small blue-text d-flex justify-content-end">
                    <router-link :to="'#'">Forgot Password?</router-link>
                  </p>
                </div>

                <div class="row d-flex align-items-center mb-4">
                  <!--Grid column-->
                  <div class="text-center mb-3 col-md-12">
                    <b-button
                      variant="primary"
                      class="btn btn-primary btn-block btn-rounded z-depth-1 waves-effect waves-light ng-hide"
                     @click="login()"
                    >Login</b-button>
                  </div>
                  <!--Grid column-->
                </div>
              </b-form>
            </div>

            <!--Footer-->
            <div class="modal-footer mx-5 pt-3 mb-1">
              <p class="font-small grey-text d-flex justify-content-end">
                Not yet register?
                <router-link :to="'/register'">Request</router-link>
              </p>
            </div>
          </div>
        </div>
      </b-row>
    </div>
  </div>
</template>
<script>
// import api from '../services/api'
//  import  router  from "../../router";
// import EventBus from '../components/EventBus'
import miniToastr from "mini-toastr";
miniToastr.init();
export default {
    data(){
        return {
            email:'',
            password:''
        }
    },
        methods:{
            login(){
              let email = this.email;
              let password = this.password;
              this.$store.dispatch("login", {email , password})
              .then(resp => {
                console.log(resp);
              //router.push({name: 'Profile'})
               this.$router.push({ name: 'Profile'})
              })
                .catch(err => {
                miniToastr.error("Login Failed");
                 console.log(err)
              });
                
            },
        
    }
   
}
</script>