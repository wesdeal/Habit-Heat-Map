import { useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from 'react-router-dom';




export default function UseSignIn() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSignIn(e) {
        e.preventDefault();

        if ((email === "") || (password === ""))  {
            /* make sure user enters all fields */
            console.log("Error: Fill all Fields");
            setErrorMessage("Please fill in all fields.")
            return;    
        }


        /* handle sign in logic with pulling from supabase */
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) { /* error checking */
            console.log("Sign-in error:", error.message);
            return;
        }

        if (data) {
            console.log(data);
            navigate('/')
        }


    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        errorMessage,
        handleSignIn
    };
}
