// Test generated by RoostGPT for test ticTacToe using AI Type Open AI and AI Model gpt-4-1106-preview

// Import React and testing utilities
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Square from '../../../../src/components/square/Square';

describe('Square Component', () => {
    test('renders without crashing', () => {
        render(<Square />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    test('renders button with value', () => {
        const buttonValue = 'X';
        render(<Square value={buttonValue} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveTextContent(buttonValue);
    });

    test('calls onClick prop when clicked', () => {
        const onClick = jest.fn();
        render(<Square onClick={onClick} />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

