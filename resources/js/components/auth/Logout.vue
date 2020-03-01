<template>
    <div></div>
</template>
<script>
export default {
    created(){
        this.$store.dispatch('destroyToken')
        .then(response => {
            this.$router.push({path: '/Login'})
        })
    },
    data(){
        return{
            
        }
    }
}
</script>