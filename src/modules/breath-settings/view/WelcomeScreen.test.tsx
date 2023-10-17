import { WelcomeScreen, setIsAnimating } from './WelcomeScreen';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { RoutePath } from '../../../router/RoutePath.type';
import { renderJest } from '../../../libs/renderJest';
import * as BreathModeStore from '../domain/breathModeStore';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  jest.resetAllMocks();
});

// TODO create zustand mock like specified here : https://github.com/pmndrs/zustand/issues/271
const ResetStoreStateComponent = () => {
  const updateBreathModeSelection = BreathModeStore.useBreathModeStore(
    (state) => state.updateBreathMode
  );
  updateBreathModeSelection('heartCoherence');
  return <div />;
};

describe('WelcomeScreen', () => {
  it('should display the default selected breath mode', async () => {
    render(<ResetStoreStateComponent />);

    renderJest(<WelcomeScreen />);

    await screen.findByText('Cohérence cardiaque');
  });

  it('should display all the options when user clicks on the selected mode', async () => {
    render(<ResetStoreStateComponent />);

    renderJest(<WelcomeScreen />);
    const coherenceButton = await screen.findByText('Cohérence cardiaque');
    fireEvent.click(coherenceButton);
    setIsAnimating(false);

    await screen.findByText('Personnalisé');
  });
  it('should hide all the options when user clicks on a mode', async () => {
    render(<ResetStoreStateComponent />);

    renderJest(<WelcomeScreen />);

    const coherenceButton = await screen.findByText('Cohérence cardiaque');
    fireEvent.click(coherenceButton);
    setIsAnimating(false);
    fireEvent.click(await screen.findByText('Respiration carrée'));
    setIsAnimating(false);

    await waitFor(() => expect(coherenceButton).not.toBeInTheDocument());
  });

  it('should launch animation when startButton is clicked', async () => {
    render(<ResetStoreStateComponent />);

    renderJest(<WelcomeScreen />);

    fireEvent.click(await screen.findByText('Commencer'));
    expect(mockedUsedNavigate).toHaveBeenCalledWith(
      RoutePath.breathAnimationScreen
    );
  });

  it('should display the selected mode chosen by the user', async () => {
    jest
      .spyOn(BreathModeStore, 'useBreathModeStore')
      .mockReturnValueOnce('custom');

    renderJest(<WelcomeScreen />);
    await screen.findByText('Personnalisé');
  });
});
