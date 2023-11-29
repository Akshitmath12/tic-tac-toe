// Test generated by RoostGPT for test ticTacToe using AI Type Open AI and AI Model gpt-4-1106-preview

import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Moves from "../../../../src/components/moves/Moves";

// We use describe to create a test suite for our Moves component
describe("Moves", () => {
  // afterEach hook to clean up after each test case
  afterEach(cleanup);

  test("renders without crashing", () => {
    render(<Moves history={[]} jumpTo={() => {}} />);
    const movesElement = screen.getByTestId("moves");
    expect(movesElement).toBeInTheDocument();
  });

  test("renders correct number of moves", () => {
    const mockHistory = [{}, {}, {}]; // Assuming each move is represented by an object
    render(<Moves history={mockHistory} jumpTo={() => {}} />);
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements).toHaveLength(mockHistory.length);
  });

  test("calls jumpTo with the correct index on button click", () => {
    const mockJumpTo = jest.fn();
    const mockHistory = [{}, {}, {}]; // Assuming each move is represented by an object
    render(<Moves history={mockHistory} jumpTo={mockJumpTo} />);
    const secondButtonElement = screen.getAllByRole("button")[1];
    fireEvent.click(secondButtonElement);
    expect(mockJumpTo).toHaveBeenCalledWith(1); // As the index for the second move is 1
  });

  // Additional test cases can be written for edge cases, error handling, etc.
});

// Note: You need to ensure that there's a data-testid="moves" attribute on the top level div in the Moves component for the first test to work.
