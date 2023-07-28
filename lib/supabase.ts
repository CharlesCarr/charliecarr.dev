import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase-types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const options = {
  auth: {
    persistSession: false,
  },
};

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, options);
