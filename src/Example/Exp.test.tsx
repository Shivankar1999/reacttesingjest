import { render, screen } from '@testing-library/react';
import { Exp } from './Exp';

describe('Render Corectly', () => {
  test('name', () => {
    render(<Exp />);

    const mydata1 = screen.getByText('Name');

    expect(mydata1).toBeInTheDocument();
  });
  test('render with  name', () => {
    render(<Exp name="Shubham" />);

    const mydata = screen.getByText('Name Shubham');

    expect(mydata).toBeInTheDocument();
  });
});
