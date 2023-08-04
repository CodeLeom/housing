import { render, screen } from '@testing-library/react';
import App from './App';

test('display featured house', () => {
  render(<App />);
  const linkElement = screen.getByText(/Featured House/i);
  expect(linkElement).toBeInTheDocument();
});
