import { fireEvent, render, screen } from '@testing-library/react';
import { BreathAnimationScreen } from './BreathAnimationScreen';
import { BrowserRouter } from 'react-router-dom';
import { RoutePath } from '../../router/RoutePath.type';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  jest.resetAllMocks();
});

describe('BreathAnimationScreen', () => {
  it('should display BreathAnimation component at the start', () => {
    render(
      <>
        <BrowserRouter>
          <BreathAnimationScreen showAnim={true} />
        </BrowserRouter>
      </>
    );
    const breathAnim = screen.getByTestId('breath-anim');
    expect(breathAnim).toBeInTheDocument();
  });

  it('should go back to welcome screen when the button is clicked', async () => {
    render(
      <>
        <BrowserRouter>
          <BreathAnimationScreen showAnim={true} />
        </BrowserRouter>
      </>
    );

    fireEvent.click(screen.getByText('Retour'));
    expect(mockedUsedNavigate).toHaveBeenCalledWith(RoutePath.welcomeScreen);
  });
});
