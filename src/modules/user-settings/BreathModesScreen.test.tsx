import { render } from '@testing-library/react';
import { BreathModesScreen } from './BreathModesScreen';
import { BrowserRouter } from 'react-router-dom';

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
});
