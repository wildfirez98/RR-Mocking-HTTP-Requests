import { render, screen } from '@testing-library/react'
import App from './App'

test('renders github profile text', () => {
  render(<App />)
  const textElement = screen.getByText(/Github profile info/i);
  expect(textElement).toBeInTheDocument();
});