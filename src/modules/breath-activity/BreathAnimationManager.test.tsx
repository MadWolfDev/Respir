import { act, render, screen } from '@testing-library/react';
import { BreathAnimationManager } from './BreathAnimationManager';

describe('BreathAnimationManager', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should display Inspirez at the start', () => {
    render(<BreathAnimationManager />);
    const breathStage = screen.getByText('Inspirez');
    expect(breathStage).toBeInTheDocument();
  });

  it('should display proper breath stages every 5 seconds', () => {
    render(<BreathAnimationManager />);
    act(() => jest.advanceTimersByTime(5000));
    let breathStage = screen.getByText('Expirez');
    expect(breathStage).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(5000));
    breathStage = screen.getByText('Inspirez');
    expect(breathStage).toBeInTheDocument();
  });
});
