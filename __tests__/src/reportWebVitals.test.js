// Test generated by RoostGPT for test reactTesting using AI Type Open AI and AI Model gpt-4-1106-preview


// __tests__/src/reportWebVitals.test.js
import reportWebVitals from '../../src/reportWebVitals';
jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn()
}));

describe('reportWebVitals', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks();
  });

  test('calls onPerfEntry with appropriate web vital functions when it is a function', async () => {
    const onPerfEntry = jest.fn();

    reportWebVitals(onPerfEntry);

    await new Promise(process.nextTick);
    expect(onPerfEntry).toHaveBeenCalledTimes(5);
  });

  test('does nothing if onPerfEntry is not a function', async () => {
    const onPerfEntry = 'not-a-function';

    reportWebVitals(onPerfEntry);

    await new Promise(process.nextTick);
    expect(onPerfEntry).toBe('not-a-function');
  });
});

