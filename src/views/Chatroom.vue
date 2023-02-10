<template>
  <div class="container">
    <Navbar></Navbar>
  </div>
</template>

<script>
import getUser from '@/composables/getUser'
import Navbar from '../components/Navbar'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
  components: { Navbar },
  setup(){
    let {user}= getUser()
    let router= useRouter()

    watch(user,()=>{
      if(!user.value){
        router.push('/')
      }
    })
  }
}
</script>

<style>

</style>