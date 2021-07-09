import React from 'react';
import { render, screen } from '@testing-library/react';
import TestComponent from '../components/TestComponent';

test('Checks to see if part of the text is on the screen', () => {
  render(<TestComponent />);
  const linkElement = screen.getByText(/This is/i);
  expect(linkElement).toBeInTheDocument();
});

test('Checks to see if the entire text is on the screen', () => {
  render(<TestComponent />);
  const linkElement = screen.getByText('This is a component solely for experimentation purposes.');
  expect(linkElement).toBeInTheDocument();
});
