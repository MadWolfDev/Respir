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

  it('should display inspire at the start', () => {
    render(<BreathAnimation />);
    const breathStage = screen.getByText('Inspire');
    expect(breathStage).toBeInTheDocument();
  });

  it('should display proper breath stages every 5 seconds', () => {
    render(<BreathAnimation />);
    act(() => jest.advanceTimersByTime(5000));
    let breathStage = screen.getByText('Maintiens');
    expect(breathStage).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(5000));
    breathStage = screen.getByText('Expire');
    expect(breathStage).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(5000));
    breathStage = screen.getByText('Bloque');
    expect(breathStage).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(5000));
    breathStage = screen.getByText('Inspire');
    expect(breathStage).toBeInTheDocument();
  });
});
