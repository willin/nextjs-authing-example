import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home 主页</Link>
          </li>
          <li>
            {' '}
            <Link href='/me'>Info 信息</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
