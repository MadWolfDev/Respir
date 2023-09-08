import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../router/RoutePath.type';
import { Screen } from '../../theme/components/Screen';
import { useBreathModeStore } from '../../store/breathModeStore';
import { useState } from 'react';
import { BreathModesScreen } from './BreathModesScreen';
import { AnimatePresence } from 'framer-motion';
import { SlidersScreen } from './SlidersScreen';
import { BreathModesDisplay } from '../../store/BreathModesDisplay.type';

export enum Display {
  breathModesDisplay,
  slidersDisplay,
}

export const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [currentDisplay, setCurrentDisplay] = useState<Display>(
    Display.slidersDisplay
  );
  const handleClickStartAnim = () => navigate(RoutePath.breathAnimationScreen);
  const handleClickBreathModes = () => {
    setCurrentDisplay(
      currentDisplay !== Display.breathModesDisplay
        ? Display.breathModesDisplay
        : Display.slidersDisplay
    );
  };
  const selectedBreathMode = useBreathModeStore(
    (state) => state.selectedBreathMode
  );

  return (
    <Screen>
      <AnimatePresence mode="wait">
        {currentDisplay === Display.breathModesDisplay ? (
          <BreathModesScreen
            setCurrentDisplay={setCurrentDisplay}
            key="default"
          />
        ) : (
          currentDisplay === Display.slidersDisplay && (
            <SlidersScreen key="custom" />
          )
        )}
      </AnimatePresence>
      <ButtonContainer>
        <ModesButton
          variant="contained"
          onClick={handleClickBreathModes}
          data-testid="modes-button"
        >
          {BreathModesDisplay[selectedBreathMode]}
        </ModesButton>
        <StartButton
          variant="contained"
          onClick={handleClickStartAnim}
          data-testid="start-button"
        >
          Lancer animation
        </StartButton>
      </ButtonContainer>
    </Screen>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const ModesButton = styled(Button)`
  margin-bottom: 1em;
  align-self: center;
  width: 15em;
`;

const StartButton = styled(ModesButton)`
  margin-bottom: 1.5em;
  width: 12em;
`;
