import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qzghxsdivfealhjawpke.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6Z2h4c2RpdmZlYWxoamF3cGtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNTM0MjksImV4cCI6MjAyMDYyOTQyOX0.1_B6gWc4f1fO-orrYU9u6u-98ZBqPGgxb9ezZnSYhuU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
