import React, { useState } from 'react';
import ADashboard from './ADashboard';
import {toast} from 'react-hot-toast'

export default function ALogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'om@gmail.com' && password === '123') {
      setLoggedIn(true);
      toast.success('Login Successful Admin OM');
    }
  };

  return (
    <>
      {!loggedIn ? (
        <div className='border shadow p-4 max-w-md mx-auto mt-10'>
          <form className='space-y-3'>
            <h1 className='text-center'>Admin Login</h1>
            <input
              className='border p-2 w-full'
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='border p-2 w-full'
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full'
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <ADashboard />
      )}
    </>
  );
}
