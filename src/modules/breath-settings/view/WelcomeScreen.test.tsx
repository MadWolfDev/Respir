import { BrowserRouter } from 'react-router-dom';
import { WelcomeScreen } from './WelcomeScreen';
import { fireEvent, render, screen } from '@testing-library/react';
import { RoutePath } from '../../../router/RoutePath.type';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  jest.resetAllMocks();
});

describe('WelcomeScreen', () => {
  it('should show buttons when modesButton is clicked', () => {
    render(
      <>
        <BrowserRouter>
          <WelcomeScreen />
        </BrowserRouter>
      </>
    );

    fireEvent.click(screen.getByTestId('modes-button'));
    const modeButtons = screen.getByTestId('mode-buttons');
    expect(modeButtons).toBeInTheDocument();
  });

  it('should launch animation when startButton is clicked', () => {
    render(
      <>
        <BrowserRouter>
          <WelcomeScreen />
        </BrowserRouter>
      </>
    );

    fireEvent.click(screen.getByTestId('start-button'));
    expect(mockedUsedNavigate).toHaveBeenCalledWith(
      RoutePath.breathAnimationScreen
    );
  });

  it.todo('should display disabled sliders when default mode is selected');
  it.todo('should display enabled sliders when custom mode is selected');
});
