import { useState } from 'react';
import authing from '../lib/authing';
import Router from 'next/router';

export default function AuthingCallback() {
  const [error, setError] = useState('');

  useState(() => {
    try {
      const { access_token, id_token, expires_in } = authing.getTokenSetFromUrlHash() as any as Record<string, string>;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('id_token', id_token);
      localStorage.setItem('expires_in', `${new Date().getTime() + Number(expires_in) * 1000}`);
      Router.push('/me');
    } catch (e) {
      setError('Login Failed');
    }
  });
  return <div>{error}</div>;
}
