<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div class="error" v-if="error">{{error}}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'

export default {
    setup(){
        const email= ref("")
        const password= ref("")
        
        let {error,signIn}= useLogin()

        const login= async()=>{
            let res= await signIn(email.value, password.value)
            if(res){
              console.log(res.user);
            }
        }

        return {email, password, login, error}
    }
}
</script>

<style>

</style>