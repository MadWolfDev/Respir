import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/Theme';
import { CssBaseline } from '@mui/material';
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
};
