import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../router/RoutePath.type';
import { Screen } from '../../theme/components/Screen';
import { useBreathModeStore } from '../../store/breathModeStore';
import { useState } from 'react';
import { BreathModesScreen } from './BreathModesScreen';
import { AnimatePresence } from 'framer-motion';
import { SlidersScreen } from './SlidersScreen';
import { BreathModesDisplay } from '../../store/BreathModesDisplay.type';
import { CustomButton } from './CustomButton';

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

  const hasToShowBreathmodesDisplay: boolean =
    currentDisplay === Display.breathModesDisplay;

  return (
    <Screen>
      <AnimatePresence mode={hasToShowBreathmodesDisplay ? 'sync' : 'wait'}>
        {hasToShowBreathmodesDisplay ? (
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

      <ButtonsContainer>
        <CustomButton
          buttonText={BreathModesDisplay[selectedBreathMode]}
          handleClick={handleClickBreathModes}
          buttonMarginBottom={1}
        />
        <CustomButton
          buttonText="Commencer"
          handleClick={handleClickStartAnim}
          buttonMarginBottom={1.5}
          buttonWidth={12}
        />
      </ButtonsContainer>
    </Screen>
  );
};

const ButtonsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
