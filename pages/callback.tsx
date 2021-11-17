import dynamic from 'next/dynamic';
import type { NextPage } from 'next';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/callback'), { ssr: false });

const Callback: NextPage = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR></DynamicComponentWithNoSSR>
    </div>
  );
};

export default Callback;
