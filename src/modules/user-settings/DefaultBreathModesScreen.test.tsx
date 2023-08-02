import { render } from '@testing-library/react';
import { DefaultBreathModesScreen } from './DefaultBreathModesScreen';
import { BrowserRouter } from 'react-router-dom';

describe('DefaultBreathModesScreen', () => {
  it('should display all the buttons', () => {
    const component = render(
      <>
        <BrowserRouter>
          <DefaultBreathModesScreen />
        </BrowserRouter>
      </>
    );
    expect(component.baseElement).toMatchSnapshot();
  });
});
