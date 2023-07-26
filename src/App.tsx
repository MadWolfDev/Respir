import { useState } from 'react';
import { BreathAnimation } from './modules/breath-activity/BreathAnimation';
import { theme } from './theme/Theme';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import styled from '@emotion/styled';

export const App = () => {
  const [showAnim, setShowAnim] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent>
        <Footer>
        </Footer>
      </AppContent>
    </ThemeProvider>
  );
}

const AppContent = styled.div`
  background: linear-gradient(180deg, #FF8E8E 0%, #FFF7DC 100%);
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
`

