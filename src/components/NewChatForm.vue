<template>
  <form @submit.prevent="">
    <div class="flex">
        <textarea placeholder="text message and click enter to send" v-model="message" @keypress.enter="handleSubmit"></textarea>
        <span @click="handleSubmit" class="material-icons send">send</span>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import useCollection from '../composables/useCollection'

export default {
setup(){
    let message= ref(null)
    let {user}= getUser()
    let {error, addDoc}= useCollection("messages")

    let handleSubmit= async()=>{
        let chat={
            message: message.value,
            name: user.value.displayName,
            created_at: timestamp()
        }
        if(message.value){
            await addDoc(chat); //add document to db use composables function
            message.value= null
        }
    }
    return {message, handleSubmit}
}
}
</script>

<style>
    form{
        margin: 10px;
    }
    textarea{
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }
    .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .send{
        padding-bottom: 20px;
        cursor: pointer;
        margin: 0 10px;
        color: #42d1b7;
    }
</style>