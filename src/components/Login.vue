<template>
  <h2>Login</h2>
  <form @submit.prevent="login" class="col-12 col-s-6 col-m-9">
    <div>
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
    </div>
    <div class="error" v-if="error">{{error}}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'

export default {
    setup(props,context){
        const email= ref("")
        const password= ref("")
        
        let {error,signIn}= useLogin()

        const login= async()=>{
            let res= await signIn(email.value, password.value)
            if(res){
              context.emit("enterChatroom")
            }
        }

        return {email, password, login, error}
    }
}
</script>

<style>

</style>