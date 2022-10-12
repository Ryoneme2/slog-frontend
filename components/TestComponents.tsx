import React from 'react';
import useBareStore from '../stores/bearStore';

type Props = {
  init?: number;
};

const TestComponents = () => {
  const setBare = useBareStore((state) => state.increasePopulation);

  return (
    <button data-cy='increase' onClick={setBare}>
      click me
    </button>
  );
};

export const Print = ({ init = 0 }: Props) => {
  const bare = useBareStore((state) => state.bears);
  return <p data-cy='counter'>bear {init + bare}</p>;
};

export default TestComponents;
