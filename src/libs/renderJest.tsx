import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/Theme';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const renderJest = (children: JSX.Element) => {
  return render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};
