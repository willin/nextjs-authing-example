import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Logout = dynamic(() => import('../components/logout'), { ssr: false });

const LogoutPage: NextPage = () => {
  return <Logout></Logout>;
};

export default LogoutPage;
