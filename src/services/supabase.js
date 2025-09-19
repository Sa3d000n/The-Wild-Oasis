import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kyjbqzjmefdniwgaygzl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5amJxemptZWZkbml3Z2F5Z3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxODAyMzcsImV4cCI6MjA2OTc1NjIzN30.O0kawC6cdNxTsm3X3w-0MankBj3SGganXPnTzSxOE3U";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
