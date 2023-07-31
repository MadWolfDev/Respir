import { createTheme } from '@mui/material/styles';
import Tuffy from './fonts/Tuffy/Tuffy.woff2';

export const theme = createTheme({
  typography: {
    fontFamily: 'Tuffy',
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#FFEFF2',
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
