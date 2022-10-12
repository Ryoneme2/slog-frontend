import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from '../index';

test('home', () => {
  render(<Home />);
  const main = within(screen.getByRole('main'));
  expect(main.getByRole('heading', { name: /Hello slog/i })).toBeDefined();
});
