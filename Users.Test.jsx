// Users.Test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './Users';

test('renders heading with text "Users starting with letter B"', () => {
    render(<Users users={['Simon', 'Barbera', 'Bob', 'Elf', 'Alexandar', 'Brad']} />);
    const headingElement = screen.getByRole('heading', { name: /Users starting with letter B/i });
    expect(headingElement).toBeInTheDocument();
});

test('renders an unordered list element"', () => {
    render(<Users users={['Simon', 'Barbera', 'Bob', 'Elf', 'Alexandar', 'Brad']} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
});

test('renders 3 list items for the provided users array', () => {
    render(<Users users={['Simon', 'Barbera', 'Bob', 'Elf', 'Alexandar', 'Brad']} />);
    const listItems = screen.getByRole('listitems');
    expect(listItems).toHaveLength(3);
});