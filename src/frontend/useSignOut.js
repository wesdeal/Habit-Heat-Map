import supabase from "../supabaseClient";
import { useNavigate } from "react-router-dom";



export default function useSignOut() {

    console.log("User clicked sign out.")
    async function handleSignOut() {
        const { error } = await supabase.auth.signOut();
    }

    return handleSignOut;
};