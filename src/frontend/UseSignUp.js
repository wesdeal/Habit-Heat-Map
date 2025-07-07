import supabase from '../supabaseClient'
import { useState } from 'react'


export default function UseSignUp() {
    
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [validSignUp, setValidSignUp] = useState(true);

    async function handleRegister(e) {
        /* logic for when a user hits submit on sign up form */
        e.preventDefault();

        const {data, error} = await supabase
        .from('Users')
        .select('username')
        .eq('username', username)

        if (data.length > 0) {
            /* Username is taken, display message on screen */
            setValidSignUp(false);
        }
        if (error) {
            console.log(error)
        }


        if ((username == "") || (email == "") || (password == "") || (cPassword == ""))  {
            /* make sure user enters all fields */
            console.log("need to enter password");
            setValidSignUp(true)

            
        } else if (!validSignUp){
            console.log("username taken")
        } else {
            const { data, error } = await supabase
            .from('Users')
            .insert([{
                email: email,
                username: username
            }])

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
        validSignUp,
        handleRegister
    };
}