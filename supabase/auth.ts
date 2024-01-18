import supabase from './supdabase.';

export const createUser = async (email: string, password: string) => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};

export const login = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  })
}
