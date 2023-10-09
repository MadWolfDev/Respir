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
import { SettingsIcon } from './SettingsIcon';
import { createButtonWidth } from './createValuesWithScreenSize';
import { useMusicStore } from '../../store/musicStore';

export enum Display {
  breathModesDisplay,
  slidersDisplay,
}

let isAnimating: boolean = false;

export const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [currentDisplay, setCurrentDisplay] = useState<Display>(
    Display.slidersDisplay
  );
  const updateMusicStatus = useMusicStore((state) => state.updateMusicStatus);
  const handleClickStartAnim = () => {
    navigate(RoutePath.breathAnimationScreen);
    updateMusicStatus('PLAYING');
  };
  const handleClickBreathModes = () => {
    if (!isAnimating) {
      isAnimating = true;
      setCurrentDisplay(
        currentDisplay !== Display.breathModesDisplay
          ? Display.breathModesDisplay
          : Display.slidersDisplay
      );
    }
  };
  const selectedBreathMode = useBreathModeStore(
    (state) => state.selectedBreathMode
  );

  const hasToShowBreathmodesDisplay: boolean =
    currentDisplay === Display.breathModesDisplay;

  return (
    <Screen>
      <SettingsIcon />
      <AnimatePresence
        onExitComplete={() => (isAnimating = false)}
        mode={hasToShowBreathmodesDisplay ? 'sync' : 'wait'}
      >
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
          buttonWidth={createButtonWidth({
            targetWidth: 45,
            buttonSize: 'small',
          })}
        />
      </ButtonsContainer>
    </Screen>
  );
};

const ButtonsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
