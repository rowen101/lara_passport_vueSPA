<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <div class="col-sm-8 mx-auto">
                <h1 class="text-center">Profile</h1>
            </div>
            <table class="table col-md-6 mx-aut">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{{ whole_name}}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{{email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import api from '../services/api'
export default {
    data(){
        this.getUser().then(res => {
            this.whole_name = res.user.name
            this.email =res.user.email
            return res
        })
        return{
            whole_name: '',
            email:''
        }
    },
    methods:{
        getUser(){
            return api.instance.get('profile',{
                headers:{
                    Authorization: `Bearer ${localStorage.usertoken}`
                }
            })
            .then(res => {
                return res.data
            })
            .catch(error => {
                console.log(error) 
            })
        }
    }
}
</script>