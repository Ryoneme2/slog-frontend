import type { NextPage } from 'next';
import TestComponents from '../components/TestComponents';
import bearStore from '../stores/bearStore';

const Home: NextPage = () => {
  const bare = bearStore((state) => state.bears);
  return (
    <>
      <h1 className='text-red-500'>Hello slog</h1>
      <div>
        <p>bear {bare}</p>
        <TestComponents />
      </div>
    </>
  );
};

export default Home;
