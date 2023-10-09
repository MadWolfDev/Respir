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
      fontSize: '1.8em',
      color: '#FFEFF2',
    },
    h3: {
      fontSize: '1.4em',
      color: '#FFEFF2',
    },
  },
  palette: {
    enable: {
      main: '#DB4B57',
      contrastText: '#FFEFF2',
    },
    disable: {
      main: '#DB7981',
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
          '&.Mui-disabled .MuiSlider-track': { color: '#DB7981' },
          '&.Mui-disabled .MuiSlider-thumb': { color: '#DB7981' },
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
