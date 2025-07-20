import supabase from '../supabaseClient'
import { useState } from 'react'


export default function UseSignUp() {
    
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    

    async function handleRegister(e) {
        /* logic for when a user hits submit on sign up form */
        e.preventDefault();

        if ((username === "") || (email === "") || (password === "") || (cPassword === ""))  {
            /* make sure user enters all fields */
            console.log("Error: Fill all Fields");
            setErrorMessage("Please fill in all fields.")
            return;    
        }

        /* const {data: existing, error: selectError} = await supabase
        .from('Users')
        .select('username')
        .eq('username', username) */

        /* if (existing.length > 0) {
            /* Username is taken, display message on screen 
            console.log("Error: Username Taken")
            setErrorMessage("Username Taken");
            return;
        } */
        


        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (signUpError) {
            console.error("Signup error:", signUpError);
            return;
        }

        // Get the user ID from auth
        const user = signUpData.user;

        if (user) {
            console.log("Sign Up Success")
        }

    
        /* so far, this does successfully add email to database and give user a UUID */
        /* 
            to add:
            once user hits register button, they shall be redirected back to homepage, logged in

            also check for if an email or username alrady exists
        */
    }
    

    return {
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        cPassword,
        setCPassword,
        errorMessage,
        handleRegister
    };
}