import { ref } from "vue"
import { auth } from '../firebase/config'

const error= ref(null)
const signIn= async(email, password)=>{
    try {
        let res= await auth.signInWithEmailAndPassword(email,password)
        console.log(res.user);    
        if(!res){
          throw new Error("could not login")
        }  
        return res        
      } 
      catch(err) {
        error.value= err.message
      }
}
const useLogin=()=>{
    return {error, signIn}
}
export default useLogin