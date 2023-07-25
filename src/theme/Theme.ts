import { createTheme } from "@mui/material/styles";
import Tuffy from './fonts/Tuffy/Tuffy.woff2';

export const theme = createTheme({
    typography: {
      fontFamily: 'Tuffy',
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


