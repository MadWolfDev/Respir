import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useBreathModeStore } from '../../store/breathModeStore';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { Display } from './WelcomeScreen';
import { BreathModes } from '../../store/defaultBreathConfigs';
import { BreathModesDisplay } from '../../store/BreathModesDisplay.type';
import { AnimVariant } from '../breath-activity/createBreathAnimationVariants';

export const DefaultBreathModesScreen = ({
  setCurrentDisplay,
}: {
  setCurrentDisplay: Dispatch<SetStateAction<Display>>;
}) => {
  const updateBreathModeSelection = useBreathModeStore(
    (state) => state.updateBreathMode
  );
  const changeBreathMode = (newBreathMode: BreathModes) => {
    updateBreathModeSelection(newBreathMode);
    newBreathMode === 'custom'
      ? setCurrentDisplay(Display.customModeDisplay)
      : setCurrentDisplay(Display.empty);
  };

  const ButtonExitAnim: ExitAnim = {
    y: '0em',
    transition: { duration: 0.75, delay: 0, ease: 'anticipate' },
  };

  const ButtonEnterAnimVariant: AnimVariant = {
    initial: { y: '5em' },
    animate: {
      y: '0em',
      transition: { duration: 0.75, ease: 'backOut' },
    },
  };

  const ButtonsExitAnims: ExitAnim[] = new Array(5);
  ButtonsExitAnims.fill(ButtonExitAnim);
  const ButtonsEnterAnimVariants: AnimVariant[] = new Array(5);
  ButtonsEnterAnimVariants.fill(ButtonEnterAnimVariant);

  for (let i = 0; i < 5; i++) {
    ButtonsExitAnims[i] = {
      ...ButtonsExitAnims[i],
      y: `${2.5}em`,
      transition: { ...ButtonsExitAnims[i].transition, delay: i * 0.05 },
    };

    ButtonsEnterAnimVariants[i] = {
      ...ButtonsEnterAnimVariants[i],
      animate: {
        ...ButtonsEnterAnimVariants[i].animate,
        y: `${-i * 3.5 - 3}em`,
      },
    };
  }

  return (
    <ButtonContainer data-testid="mode-buttons">
      <FirstModeButton
        variant="contained"
        component={motion.div}
        exit={ButtonExitAnim}
        onClick={() => changeBreathMode('heartCoherence')}
      >
        {BreathModesDisplay.heartCoherence}
      </FirstModeButton>
      <ModeButton
        variant="contained"
        component={motion.div}
        exit={ButtonExitAnim}
        onClick={() => changeBreathMode('vitality')}
      >
        {BreathModesDisplay.vitality}
      </ModeButton>
      <ModeButton
        variant="contained"
        component={motion.div}
        exit={ButtonExitAnim}
        onClick={() => changeBreathMode('relaxation')}
      >
        {BreathModesDisplay.relaxation}
      </ModeButton>
      <ModeButton
        variant="contained"
        component={motion.div}
        exit={ButtonExitAnim}
        onClick={() => changeBreathMode('square')}
      >
        {BreathModesDisplay.square}
      </ModeButton>
      <ModeButton
        variant="contained"
        component={motion.div}
        exit={ButtonExitAnim}
        onClick={() => changeBreathMode('custom')}
      >
        {BreathModesDisplay.custom}
      </ModeButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column-reverse',
});

export type ExitAnim = {
  y?: string;
  transition: { duration: number; delay?: number; ease?: string };
};
