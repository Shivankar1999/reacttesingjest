import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Render Hello in Greet', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

test('Render Greet with props  name', () => {
  render(<Greet name="Shubham" />);
  const textElement = screen.getByText('Hello Shubham');
  expect(textElement).toBeInTheDocument();
});
