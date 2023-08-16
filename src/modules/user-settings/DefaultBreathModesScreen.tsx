import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useBreathModeStore } from '../../store/breathModeStore';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { Display } from './WelcomeScreen';
import { BreathModes } from '../../store/defaultBreathConfigs';
import { BreathModesDisplay } from '../../store/BreathModesDisplay.type';

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
  alignItems: 'space-between',
});

const ModeButton = styled(Button)({
  alignSelf: 'center',
  marginBottom: '1em',
  width: '15em',
}) as typeof Button;

const FirstModeButton = styled(ModeButton)({
  marginBottom: '2.5em',
}) as typeof ModeButton;

const ButtonExitAnim = {
  opacity: 0,
  transition: { duration: 0.25 },
};
