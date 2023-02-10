import { auth } from "@/firebase/config";
import { ref } from "vue";

let user= ref(auth.currentUser)
auth.onAuthStateChanged((_user)=>{
    console.log("user state chang.",_user);
    user.value=_user
})

let getUser=()=>{
    return {user}
}

export default getUser