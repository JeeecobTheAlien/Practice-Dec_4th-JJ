// Welcome.Test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders "Click me!" button', () => {
    render(<Button />);
    const buttonElement = screen.getByText(/Click me!/i);
    expect(buttonElement).toBeInTheDocument();
});

test('renders "Welcome" heading', () => {
    render(<Button />);
    const welcomeElement = screen.getByText(/Welcome/i);
    expect(welcomeElement).toBeInTheDocument();
});

test('renders "Thanks for visiting" heading', () => {
    render(<Button />);
    const thanksElement = screen.getByText(/Thanks for visiting/i);
    expect(thanksElement).toBeInTheDocument();
});