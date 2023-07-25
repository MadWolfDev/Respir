import React from 'react';
import './App.css'
import { BreathAnimation } from './modules/breath-activity/BreathAnimation';
import { theme } from './theme/Theme';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BreathAnimation />
      </div>
    </ThemeProvider>
  );
}

