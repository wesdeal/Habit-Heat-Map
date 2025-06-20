import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ebsxbiwyaadzvqbfkjjd.supabase.co';
const superbaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVic3hiaXd5YWFkenZxYmZrampkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2OTQ1MDgsImV4cCI6MjA2NTI3MDUwOH0.-XMKOYpZp_99voi5CsmJXm0brJSUbHaRbiow7cwth8I';

export const supabase = createClient(
    import.meta.env.SUPABASE_UR,
    import.meta.env.SUPABASE_ANON_KEY
);