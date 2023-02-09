<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="Display name" v-model="displayName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const displayName= ref("")
        const email= ref("")
        const password= ref("")
        const signUp= ()=>{
            console.log(displayName.value, email.value, password.value);
        }

        return {displayName, email, password, signUp}
    }
}
</script>

<style>

</style>