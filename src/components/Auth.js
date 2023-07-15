import React from "react"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase-config"
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = (props) => {
const {setIsAuth} = props;
    const signInWithGoogle = async() => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auto-token", result.user.refreshToken);
            setIsAuth(true)
        }
        catch(err){
            console.log(err)
        }
    }


    return(
    <div className="auth">
        <p>Sign In With Yout Google Account Please ...</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
    )
}