import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  // createClient would throw its own, less helpful, error on an empty URL.
  throw new Error("Missing Supabase env vars. Copy .env.example to .env.local and fill them in.");
}

export const supabase = createClient(url, anonKey);
