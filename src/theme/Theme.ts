import { createTheme } from '@mui/material/styles';
import Tuffy from './fonts/Tuffy/Tuffy.woff2';

export const theme = createTheme({
  typography: {
    fontFamily: 'Tuffy',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      color: '#FFEFF2',
    },
    h2: {
      fontSize: '1.4rem',
      color: '#FFEFF2',
    },
  },
  palette: {
    custom: {
      main: '#DB4B57',
      contrastText: '#FFEFF2',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
                font-family: 'Tuffy';
                src: local('Tuffy'), url(${Tuffy}) format('woff2');
            }
        `,
    },
  },
});
