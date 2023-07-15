import { render, screen } from '@testing-library/react';
import { Applications } from './Applications';

describe('Application COmponent', () => {
  test('Render HTML Elements', () => {
    render(<Applications />);

    const pageHead = screen.getByRole('heading', {
      level: 1,
    });
    expect(pageHead).toBeInTheDocument();

    const pageSelect = screen.getByRole('heading', {
      level: 2,
    });
    const textElement2 = screen.getByText('I am Shubham');
    expect(textElement2).toBeInTheDocument();

    expect(pageSelect).toBeInTheDocument();
    const altImag = screen.getByAltText('my img');
    expect(altImag).toBeEmptyDOMElement();

    const inputElement = screen.getByRole('textbox', {
      name: 'Name',
    });

    // const hanleId = screen.getByTestId('cutom-element');

    // expect(hanleId).toBeInTheDocument();
    const newTitle = screen.getByTitle('newTitle');
    expect(newTitle).toBeInTheDocument();
    const inputElement2 = screen.getByPlaceholderText('MyName');
    expect(inputElement2).toBeInTheDocument();
    const inputElement3 = screen.getByDisplayValue('Shubham');
    expect(inputElement3).toBeInTheDocument();
    const textElement = screen.getByRole('textbox', {
      name: 'Bio',
    });

    expect(textElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    const comboboxElement = screen.getByRole('combobox');
    expect(comboboxElement).toBeInTheDocument();
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
