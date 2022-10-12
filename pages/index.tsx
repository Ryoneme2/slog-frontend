import type { NextPage } from 'next';
import TestComponents, { Print } from '../components/TestComponents';
import bearStore from '../stores/bearStore';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <h1 className='text-red-500 font-bold'>Hello slog</h1>
        <div>
          <Print />
          <TestComponents />
        </div>
      </main>
    </>
  );
};

export default Home;
