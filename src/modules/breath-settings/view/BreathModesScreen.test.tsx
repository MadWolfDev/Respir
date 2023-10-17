import { BreathModesScreen } from './BreathModesScreen';
import { renderJest } from '../../../libs/renderJest';

describe('BreathModesScreen', () => {
  it('should display all the buttons', () => {
    const setStateMock = jest.fn();

    const component = renderJest(
      <BreathModesScreen setCurrentDisplay={setStateMock} />
    );
    expect(component.baseElement).toMatchSnapshot();
  });
});
