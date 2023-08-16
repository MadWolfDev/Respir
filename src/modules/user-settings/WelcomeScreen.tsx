import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../router/RoutePath.type';
import { Screen } from '../../theme/components/Screen';
import { useBreathModeStore } from '../../store/breathModeStore';
import { useState } from 'react';
import { DefaultBreathModesScreen } from './DefaultBreathModesScreen';
import { AnimatePresence } from 'framer-motion';
import { CustomModeScreen } from './CustomModeScreen';
export enum Display {
  defaultBreathModesDisplay,
  customModeDisplay,
  empty,
}

export const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [currentDisplay, setCurrentDisplay] = useState<Display>(Display.empty);
  const handleClickStartAnim = () => navigate(RoutePath.breathAnimationScreen);
  const handleClickBreathModes = () => {
    setCurrentDisplay(
      currentDisplay !== Display.defaultBreathModesDisplay
        ? Display.defaultBreathModesDisplay
        : Display.empty
    );
  };
  const breathModeSelected = useBreathModeStore(
    (state) => state.breathModeSelected
  );

  return (
    <Screen>
      <Outlet />
      <AnimatePresence mode="wait">
        {currentDisplay === Display.defaultBreathModesDisplay ? (
          <DefaultBreathModesScreen
            setCurrentDisplay={setCurrentDisplay}
            key="default"
          />
        ) : (
          currentDisplay === Display.customModeDisplay && (
            <CustomModeScreen key="custom" />
          )
        )}
      </AnimatePresence>
      <ButtonContainer>
        <ModesButton
          variant="contained"
          onClick={handleClickBreathModes}
          data-testid="modes-button"
        >
          {breathModeSelected.breathMode}
        </ModesButton>
        <StartButton
          variant="contained"
          onClick={handleClickStartAnim}
          data-testid="start-button"
        >
          Start
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
  width: 10em;
`;
