import { act, render, screen } from '@testing-library/react';
import { BreathAnimation } from "./BreathAnimation";

describe('BreathAnimation', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    });

    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    });

    it('should display inspire at the start', () => {
        const component = render(<BreathAnimation />);
        const breathStage = component.getByText('Inspire');
        expect(breathStage).toBeInTheDocument();
    });

    it('should display proper breath stages every 5 seconds', () => {
        const component = render(<BreathAnimation />);
        act(() => jest.advanceTimersByTime(5000))
        let breathStage = component.getByText('Maintiens');
        expect(breathStage).toBeInTheDocument(); 

        act(() => jest.advanceTimersByTime(5000))
        breathStage = component.getByText('Expire');
        expect(breathStage).toBeInTheDocument(); 

        act(() => jest.advanceTimersByTime(5000))
        breathStage = component.getByText('Bloque');
        expect(breathStage).toBeInTheDocument();

        act(() => jest.advanceTimersByTime(5000))
        breathStage = component.getByText('Inspire');
        expect(breathStage).toBeInTheDocument();
    })   
});