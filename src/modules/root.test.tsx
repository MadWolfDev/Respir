import { render } from '@testing-library/react';
import { Root } from './root';
import { RoutePath } from '../router/RoutePath.type';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  jest.resetAllMocks();
});

describe('root', () => {
  it('should change route path to WelcomeScreen at start', () => {
    render(<Root />);
    expect(mockedUsedNavigate).toHaveBeenCalledWith(RoutePath.welcomeScreen);
  });
});
