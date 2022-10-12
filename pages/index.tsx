import type { NextPage } from 'next';
import TestComponents, { Print } from '../components/TestComponents';
import bearStore from '../stores/bearStore';

const Home: NextPage = () => {
  return (
    <>
      <h1 className='text-red-500'>Hello slog</h1>
      <div>
        <Print />
        <TestComponents />
      </div>
    </>
  );
};

export default Home;
