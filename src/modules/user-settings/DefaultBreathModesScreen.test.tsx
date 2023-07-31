import { render } from '@testing-library/react';
import { DefaultBreathModesScreen } from './DefaultBreathModesScreen';

describe('DefaultBreathModesScreen', () => {
  it('should display all the buttons', () => {
    const component = render(<DefaultBreathModesScreen />);
    expect(component.baseElement).toMatchSnapshot();
  });
});
