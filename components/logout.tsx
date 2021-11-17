import { useState } from 'react';
import authing from '../lib/authing';
import Router from 'next/router';

export default function AuthingLogout() {
  const [error, setError] = useState('');

  useState(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_in');
    authing
      .logout()
      .then(() => {
        Router.push('/');
      })
      .catch(() => {
        setError('Logout Failed');
      });
  });
  return <div>{error}</div>;
}
