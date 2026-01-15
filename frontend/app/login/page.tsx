'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../lib/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const login = async () => {
    const res = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.accessToken);
    router.push('/');
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-80 space-y-4">
        <h1 className="text-xl font-bold">Login</h1>
        <input className="border p-2 w-full" placeholder="Email"
          onChange={e => setEmail(e.target.value)} />
        <input className="border p-2 w-full" type="password" placeholder="Password"
          onChange={e => setPassword(e.target.value)} />
        <button onClick={login}
          className="bg-black text-white w-full py-2">
          Login
        </button>
      </div>
    </div>
  );
}
