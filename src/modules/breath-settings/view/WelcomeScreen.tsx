import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../router/RoutePath.type';
import { Screen } from '../../../libs/design-system/Screen';
import { useBreathModeStore } from '../domain/breathModeStore';
import { useState } from 'react';
import { BreathModesScreen } from './BreathModesScreen';
import { AnimatePresence } from 'framer-motion';
import { ConfigurationModeScreen } from './ConfigurationModeScreen';
import { BreathModesDisplay } from '../domain/BreathModesDisplay.type';
import { CustomButton } from '../../../libs/design-system/CustomButton';
import { SettingsIcon } from '../../user-settings/view/SettingsIcon';
import { createButtonWidth } from '../../../libs/design-system/createValuesWithScreenSize';
import { useMusicStore } from '../../user-settings/domain/musicStore';
import { Spacer } from '../../../libs/design-system/Spacer';

export enum Display {
  breathModesDisplay,
  slidersDisplay,
}

let isAnimating: boolean = false;

/**
 * @deprecated this should be used for testing only as there is no way to end an animation in test with framer motion
 * https://github.com/framer/motion/issues/1690
 *  */
export const setIsAnimating = (value: boolean) => {
  isAnimating = value;
};

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
            <ConfigurationModeScreen key="custom" />
          )
        )}
      </AnimatePresence>
      {/* <SpacerUnderAnimation /> */}
      <ButtonsContainer>
        <CustomButton
          buttonText={BreathModesDisplay[selectedBreathMode]}
          handleClick={handleClickBreathModes}
        />
        <Spacer direction="VERTICAL" spacingFactor={0.5} spacingFactorFixed />
        <CustomButton
          buttonText="Commencer"
          handleClick={handleClickStartAnim}
          buttonWidth={createButtonWidth({
            targetWidth: 45,
            buttonSize: 'small',
          })}
        />
        <Spacer direction="VERTICAL" spacingFactor={1} spacingFactorFixed />
      </ButtonsContainer>
    </Screen>
  );
};

const ButtonsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
