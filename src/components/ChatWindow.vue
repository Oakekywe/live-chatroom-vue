<template>
  <div class="chat-window">
    <div class="messages" ref="messageBox">
        <div class="single" v-for="message in formattedMessages" :key="message.id">
            <span class="created-at">{{message.created_at}}</span>
            <span class="name">{{message.name}}</span>
            <span class="message">{{message.message}}</span>
        </div>
        
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { ref } from '@vue/reactivity'
import { computed, onUpdated } from '@vue/runtime-core'
import {formatDistanceToNow} from 'date-fns'
export default {
    setup(){
        let messages= ref([])
        let messageBox= ref(null)
        //auto scrolling
        onUpdated(()=>{
          messageBox.value.scrollTop= messageBox.value.scrollHeight
        })




        //change date format with Date fns 
        let formattedMessages= computed(()=>{
          return messages.value.map((message)=>{
            let formatTime= formatDistanceToNow(message.created_at.toDate())
            return {...message, created_at: formatTime}
          })
        })

        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            let results=[]
            snap.docs.forEach((doc)=>{
                let document= {...doc.data(), id:doc.id}
                // if(doc.data().created_at){
                  doc.data().created_at && results.push(document)
                // }
                
            })
            messages.value= results
        })
        return {messages,formattedMessages,messageBox}
    }
}
</script>

<style>
    .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>