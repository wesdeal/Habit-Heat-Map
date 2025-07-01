import supabase from '../supabaseClient'
import { useState } from 'react'


export default function UseSignUp() {
    
    const [email, setEmail] = useState("")

    async function handleRegister(e) {
        /* logic for when a user hits submit on sign up form */

        e.preventDefault();

        const { data, error } = await supabase
            .from('Users')
            .insert([{email: email, username: username}])
        
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
        handleRegister
    };
}