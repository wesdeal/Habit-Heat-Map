import { useEffect, useState } from "react";
import supabase from "../supabaseClient";

export default function useSession() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            const {data: { session } } = await supabase.auth.getSession();
            setSession(session)
            console.log(session);
        };

        getSession();

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });


        return () => {
            listener.subscription?.unsubscribe();
        };


    }, []);

    return session;
}