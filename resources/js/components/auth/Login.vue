<template>
  <div class="login-form">
    <form>
        <h2 class="text-center">Log in</h2>       
        <div class="form-group">
            <input type="text" v-model="email" class="form-control" placeholder="Email" required="required">
        </div>
        <div class="form-group">
            <input type="password" v-model="password" class="form-control" placeholder="Password" required="required">
        </div>
        <div class="form-group">
            <button type="submit" @click="login()" class="btn btn-primary btn-block">Log in</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
            <a href="#" class="pull-right">Forgot Password?</a>
        </div>        
    </form>
    <p class="text-center"><a href="#">Create an Account</a></p>
</div>
</template>
<script>

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
               this.$router.push({ name: 'Home'})
              })
                .catch(err => {
                miniToastr.error("Login Failed");
                 console.log(err)
              });
                
            },
        
    }
   
}
</script>
<style>
.login-form {
		width: 340px;
    	margin: 50px auto;
	}
    .login-form form {
    	margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
</style>