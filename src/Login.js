import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
    const signIn = () => {
        // do google login
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
           <div className="login__logo">
               <img src="DiscordLogo.png" alt="Discord logo"/>
           </div>

           <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login;
