import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gsxrfqctyzxjawonbfho.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzeHJmcWN0eXp4amF3b25iZmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMzY4MzAsImV4cCI6MjAyMDkxMjgzMH0.O6VAwSQ7yGVUUlJkQn5FG4nyzNgBywodh3h_3kjqAbs"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;