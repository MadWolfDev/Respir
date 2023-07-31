import { act, render, screen } from '@testing-library/react';
import { BreathAnimation } from './BreathAnimation';

describe('BreathAnimation', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should display Inspirez at the start', () => {
    render(<BreathAnimation />);
    const breathStage = screen.getByText('Inspirez');
    expect(breathStage).toBeInTheDocument();
  });

  it('should display proper breath stages every 5 seconds', () => {
    render(<BreathAnimation />);
    act(() => jest.advanceTimersByTime(5000));
    let breathStage = screen.getByText('Expirez');
    expect(breathStage).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(5000));
    breathStage = screen.getByText('Inspirez');
    expect(breathStage).toBeInTheDocument();
  });
});
