import { render, screen } from '@testing-library/react';
import Greet from './Greet';
describe('Geet', () => {
  test('Render Hello', () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});

describe.only('Nested', () => {
  test('Render Greet with props', () => {
    render(<Greet name="Shubham" />);
    const textElement = screen.getByText('Hello Shubham');
    expect(textElement).toBeInTheDocument();
  });
});
