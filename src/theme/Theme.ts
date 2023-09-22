import { createTheme } from '@mui/material/styles';
import Tuffy from './fonts/Tuffy/Tuffy.woff2';

export const theme = createTheme({
  typography: {
    fontFamily: 'Tuffy',
    h1: {
      fontWeight: 700,
      fontSize: '3.5em',
      color: '#FFEFF2',
    },
    h2: {
      fontSize: '1.4em',
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
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled .MuiSlider-track': { color: '#db7981' },
          '&.Mui-disabled .MuiSlider-thumb': { color: '#db7981' },
        },
        track: {
          color: '#DB4B57',
        },
        thumb: {
          color: '#DB4B57',
        },
        rail: { color: '#FFF7DC' },
      },
    },
  },
});
