import supabase from './supdabase.';

export const createUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  console.log(data);
  console.log(error, 'ERROR');
};
