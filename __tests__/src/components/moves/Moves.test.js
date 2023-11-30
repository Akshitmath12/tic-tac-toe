// Test generated by RoostGPT for test ticTacToe using AI Type Open AI and AI Model gpt-4-1106-preview

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Moves from '../../../src/components/moves/Moves';

describe('Moves Component', () => {
  // Test case for rendering with no history
  test('renders correctly with empty history', () => {
    const { container, queryByText } = render(<Moves history={[]} jumpTo={() => {}} />);
    const listItem = container.querySelector('li');
    const button = queryByText('Go to game start');

    expect(listItem).toBeNull();
    expect(button).toBeNull();
  });

  // Test case for correct list generation based on history
  test('generates move list based on history prop', () => {
    const jumpToMock = jest.fn();
    const history = [{ squares: Array(9).fill(null) }, { squares: Array(9).fill('X') }];
    const { getAllByRole } = render(<Moves history={history} jumpTo={jumpToMock} />);
    const buttons = getAllByRole('button');

    // Ensure two buttons are rendered
    expect(buttons.length).toBe(2);
    // Check the description of buttons
    expect(buttons[0]).toHaveTextContent('Go to game start');
    expect(buttons[1]).toHaveTextContent('Go to move #1');
  });

  // Test case for calling jumpTo function on button click
  test('calls jumpTo function with index when button clicked', () => {
    const jumpToMock = jest.fn();
    const history = [{ squares: Array(9).fill(null) }, { squares: Array(9).fill('X') }];
    const { getAllByRole } = render(<Moves history={history} jumpTo={jumpToMock} />);
    const button = getAllByRole('button')[1];
    fireEvent.click(button);

    expect(jumpToMock).toHaveBeenCalledWith(1);
  });
});

