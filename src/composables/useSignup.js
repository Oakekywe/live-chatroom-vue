import { ref } from "vue"
import { auth } from '../firebase/config'

const error= ref(null)
const createAccount= async(email, password, displayName)=>{
    try{
        let res= await auth.createUserWithEmailAndPassword(email, password)
        if(!res){
          throw new Error("could not create account.")
        }
        res.user.updateProfile({displayName})
        return res
      }catch(err){
        error.value= err.message;
      }
}
const useSignup= ()=>{    
    return {error, createAccount}
}

export default useSignup