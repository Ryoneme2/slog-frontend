import { Print } from './TestComponents';
const counterSelector = '[data-cy=counter]';

it('init value', () => {
  cy.mount(<Print init={102} />);
  cy.get(counterSelector).should('have.text', 'bear 102');
});
