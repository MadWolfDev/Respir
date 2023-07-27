import { useState } from 'react';

import { theme } from './theme/Theme';
import { ThemeProvider } from "@mui/material/styles";
import { Button, CssBaseline } from '@mui/material';
import styled from '@emotion/styled';
import { BreathAnimationManager } from './modules/breath-activity/BreathAnimationManager';

export const App = () => {
  const [showAnim, setShowAnim] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent>
        <BreathAnimationManager showAnim={showAnim} />
        <Footer>
          <Button 
            variant="contained"
            onClick={() => { setShowAnim(!showAnim) }}
          >
            On/Off
          </Button>
        </Footer>
      </AppContent>
    </ThemeProvider>
  );
}

const AppContent = styled.div`
  background: linear-gradient(180deg, #FF8E8E 0%, #FFF7DC 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
`

