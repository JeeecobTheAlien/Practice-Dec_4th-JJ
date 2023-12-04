// HappyHolidays.Test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import HappyHolidays from './HappyHolidays';

test('renders component correctly', () => {
    render(<HappyHolidays />);
    const headingElement = screen.getByRole('heading', { name: /Its December!!!/i });
    expect(headingElement).toBeInTheDocument();
});

test('"Happy Holidays Hurrah!" is NOT present when component is loaded', () => {
    render(<HappyHolidays />);
    const hurrahElement = screen.queryByRole('heading', { name: /Happy Holdays Hurrah!/i });
    expect(hurrahElement).not.toBeInTheDocument();
});

test('"Happy Holidays Hurrah!" eventually appears after some time', async () => {
    render(<HappyHolidays />);
    const hurrahElement = screen.queryByRole('heading', { name: /Happy Holdays Hurrah!/i });
    expect(hurrahElement).not.toBeInTheDocument();

    // wait for 3 seconds to allow "Happy Holidays Hurrah!" to appear
    await new Promise(resolve => setTimeout(resolve, 3000));

    const updatedHurrahElement = screen.getByRole('heading', { name: /Happy Holdays Hurrah!/i });
    expect(updatedHurrahElement).toBeInTheDocument();
}, 10000);    