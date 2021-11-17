import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const UserInfo = dynamic(() => import('../components/info'), { ssr: false });

const Me: NextPage = () => {
  return <UserInfo></UserInfo>;
};

export default Me;
