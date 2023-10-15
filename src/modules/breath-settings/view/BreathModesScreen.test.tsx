import { render } from '@testing-library/react';
import { BreathModesScreen } from './BreathModesScreen';
import { BrowserRouter } from 'react-router-dom';

//@todo rédiger les tests manquants
describe('BreathModesScreen', () => {
  it('should display all the buttons', () => {
    const setStateMock = jest.fn();

    const component = render(
      <>
        <BrowserRouter>
          <BreathModesScreen setCurrentDisplay={setStateMock} />
        </BrowserRouter>
      </>
    );
    expect(component.baseElement).toMatchSnapshot();
  });

  it.todo('should display the default selected breath mode');

  it.todo(
    'should display all the options when user clicks on the selected mode'
  );

  it.todo('should hide all the options when user clicks on a mode');
  it.todo(
    'should hide all the options when user clicks on the mode that was already the default selected mode'
  );
  it.todo('should display the selected mode chosen by the user');
  it.todo('should launch the animation with the mode selected by the user');
});
