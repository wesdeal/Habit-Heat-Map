import { useState } from "react";
import supabase from "../supabaseClient";



export default function UseSignIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    async function handleSignIn(e) {
        e.preventDefault();
        if ((username === "") || (password === ""))  {
            /* make sure user enters all fields */
            console.log("Error: Fill all Fields");
            setErrorMessage("Please fill in all fields.")
            return;    
        }

        const {data,error} = await supabase
        .from('Users')
        


    }

    return {
        username,
        setUsername,
        password,
        setPassword,
        errorMessage,
        handleSignIn
    };
}
