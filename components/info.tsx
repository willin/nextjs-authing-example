import { useEffect, useState } from 'react';
import Link from 'next/link';
import authing from '../lib/authing';

export default function UserInfo() {
  const [error, setError] = useState<{ message?: string }>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [info, setInfo] = useState({});
  const [accessToken, setAccessToken] = useState('');
  const [idToken, setIdToken] = useState('');
  const [expiresIn, setExpiresIn] = useState(0);

  useState(() => {
    setAccessToken(localStorage.getItem('access_token') || '');
    setIdToken(localStorage.getItem('id_token') || '');
    setExpiresIn(Number(localStorage.getItem('expires_in')));
  });

  useEffect(() => {
    authing.getUserInfoByAccessToken(accessToken).then(
      (result) => {
        setIsLoaded(true);
        setInfo(result);
      },

      (error) => {
        setError(error);
      }
    );
  }, [accessToken]);

  if (error) {
    return (
      <div>
        <p>Error: {error?.message}</p>
      </div>
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Link href='/logout'>Logout 注销</Link>
        <h2>Info</h2>
        <ul>
          {Object.keys(info).map((key) => (
            <li key={key}>
              <strong>{key}:</strong>
              {String(info[key])}
            </li>
          ))}
        </ul>
        <h2>Meta</h2>
        <ul>
          <li>
            <strong>Expires In: {new Date(expiresIn).toLocaleString()}</strong>
          </li>
          <li>
            <strong>Access Token:</strong> {accessToken}
          </li>
          <li>
            <strong>Id Token:</strong> {idToken}
          </li>
        </ul>
      </div>
    );
  }
}
