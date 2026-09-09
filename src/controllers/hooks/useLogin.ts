import { useState } from 'react';

export function useLogin(){
  const [loading,setLoading] = useState(false);

  async function login(email:string,password:string){
    setLoading(true);
    try {
      return { email, password };
    } finally {
      setLoading(false);
    }
  }

  return { login, loading };
}
