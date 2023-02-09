<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const email= ref("")
        const password= ref("")
        const login= ()=>{
            console.log(displayName.value, email.value, password.value);
        }

        return {email, password, login}
    }
}
</script>

<style>

</style>