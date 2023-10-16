import { fireEvent, screen } from '@testing-library/react';
import { BreathAnimationScreen } from './BreathAnimationScreen';
import { RoutePath } from '../../../router/RoutePath.type';
import { renderJest } from '../../../libs/renderJest';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  jest.resetAllMocks();
});

describe('return button in breath animation screen', () => {
  it('should be present at start', () => {
    renderJest(<BreathAnimationScreen />);

    expect(screen.getByText('Retour')).toBeInTheDocument();
  });

  it('should go back to welcome screen when the return button is clicked', async () => {
    renderJest(<BreathAnimationScreen />);

    fireEvent.click(screen.getByText('Retour'));
    expect(mockedUsedNavigate).toHaveBeenCalledWith(RoutePath.welcomeScreen);
  });
});
