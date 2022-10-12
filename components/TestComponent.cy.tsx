import TestComponent from './TestComponents';

describe('<Stepper>', () => {
  it('mounts', () => {
    cy.mount(<TestComponent />);
  });
});
