<template>
  <nav v-if="user">
    <div>
        <p>Hi {{user.displayName}}</p>
        <p class="email">logged in as {{user.email}}</p>
    </div>
    <button @click="deleteAll">Delete</button>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import { auth, db } from '@/firebase/config'

export default {
    setup(){
        let error= ref(null)
        let {user}= getUser()
        
        const logout= async()=>{
            try{
                await auth.signOut()
            }
            catch(err){
                error.value= err.message
                console.log(error.value);
            }
        }

        // delete button feature
        const deleteAll= async()=>{
            let ids= ref([])
            let res= await db.collection("messages").get()
            res.forEach((doc)=>{
                ids.value.push(doc.id)
            })
            
            if(ids.value!=null){
                ids.value.forEach((id)=>{
                    db.collection("messages").doc(id).delete()
                })
            }
        }
        
        return {logout, user, deleteAll}
    }
}
</script>

<style>
    nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p{
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email{
        font-size: 14px;
        color: #999;
    }
</style>