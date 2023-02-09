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
import { auth } from '../firebase/config'
export default {
    setup(){
        const displayName= ref("")
        const email= ref("")
        const password= ref("")
        const error= ref(null)
        
        const signUp= async()=>{
            try{
              let res= await auth.createUserWithEmailAndPassword(email.value, password.value)
              if(!res){
                throw new Error("could not create account.")
              }
              console.log(res.user);
            }catch(err){
              error.value= err.message;
            }
        }

        return {displayName, email, password, signUp}
    }
}
</script>

<style>

</style>