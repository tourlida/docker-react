import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Should app rendered', () => {
  render(<App />);
  const mainAppElement = screen.getByTestId('app-id')
  expect(mainAppElement).toBeInTheDocument();
});

