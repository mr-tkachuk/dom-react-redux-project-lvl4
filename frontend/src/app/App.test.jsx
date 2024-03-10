import { render, screen } from '@testing-library/react';
import App from './App';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hexlet chat/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
