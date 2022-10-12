import Index from './index';
const counterSelector = '[data-cy=counter]';
const increaseSelector = '[data-cy=increase]';

it('mounts', () => {
  cy.mount(<Index />);

  cy.get(counterSelector).should('have.text', 'bear 0');
});

it('onClick to increase', () => {
  cy.mount(<Index />);

  cy.get(increaseSelector).click();

  cy.get(counterSelector).should('have.text', 'bear 1');
});
