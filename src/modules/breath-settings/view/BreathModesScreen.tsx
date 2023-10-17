import { styled } from '@mui/material/styles';
import { useBreathModeStore } from '../domain/breathModeStore';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { Display } from './WelcomeScreen';
import { BreathModes } from '../infra/defaultBreathConfigs';
import { BreathModesDisplay } from '../domain/BreathModesDisplay.type';
import { CustomButton } from '../../../libs/design-system/CustomButton';
import { createButtonsExitAnim } from './animations/button/createButtonExitAnim';
import { createButtonsVariantAnim } from './animations/button/createButtonsVariantAnim';

export const BreathModesScreen = ({
  setCurrentDisplay,
}: {
  setCurrentDisplay: Dispatch<SetStateAction<Display>>;
}) => {
  const updateBreathModeSelection = useBreathModeStore(
    (state) => state.updateBreathMode
  );
  const changeBreathMode = (newBreathMode: BreathModes) => {
    updateBreathModeSelection(newBreathMode);
    setCurrentDisplay(Display.slidersDisplay);
  };

  const buttonsExitAnims = createButtonsExitAnim(5);
  const buttonsAnimVariants = createButtonsVariantAnim(5);

  return (
    <ButtonContainer>
      <CustomButton
        buttonText={BreathModesDisplay.custom}
        handleClick={() => changeBreathMode('custom')}
        buttonFixed={true}
        animVariant={buttonsAnimVariants[4]}
        exitAnim={buttonsExitAnims[4]}
      />

      <CustomButton
        buttonText={BreathModesDisplay.square}
        handleClick={() => changeBreathMode('square')}
        buttonFixed={true}
        animVariant={buttonsAnimVariants[3]}
        exitAnim={buttonsExitAnims[3]}
      />

      <CustomButton
        buttonText={BreathModesDisplay.relaxation}
        handleClick={() => changeBreathMode('relaxation')}
        buttonFixed={true}
        animVariant={buttonsAnimVariants[2]}
        exitAnim={buttonsExitAnims[2]}
      />

      <CustomButton
        buttonText={BreathModesDisplay.vitality}
        handleClick={() => changeBreathMode('vitality')}
        buttonFixed={true}
        animVariant={buttonsAnimVariants[1]}
        exitAnim={buttonsExitAnims[1]}
      />

      <CustomButton
        buttonText={BreathModesDisplay.heartCoherence}
        handleClick={() => changeBreathMode('heartCoherence')}
        buttonFixed={true}
        animVariant={buttonsAnimVariants[0]}
        exitAnim={buttonsExitAnims[0]}
      />
    </ButtonContainer>
  );
};

const ButtonContainer = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column-reverse',
});
