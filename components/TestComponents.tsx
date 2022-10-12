import React from 'react';
import useBareStore from '../stores/bearStore';

type Props = {};

const TestComponents = (props: Props) => {
  const setBare = useBareStore((state) => state.increasePopulation);

  return <button onClick={setBare}>click me</button>;
};

export default TestComponents;
