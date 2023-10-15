import { Button, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimVariant } from '../../modules/breath-activity/domain/createBreathAnimationVariants';
import { ExitAnim } from '../../modules/breath-activity/domain/createBreathAnimationVariants';
import { createButtonWidth } from './createValuesWithScreenSize';

export const CustomButton = ({
  buttonWidth = createButtonWidth({ targetWidth: 60 }),
  buttonFixed = false,
  animVariant,
  exitAnim,
  handleClick,
  buttonText,
}: {
  buttonText: string;
  handleClick: () => void;
  buttonWidth?: number;
  buttonFixed?: boolean;
  animVariant?: AnimVariant;
  exitAnim?: ExitAnim;
}) => {
  const StyledButton = styled(Button)({
    alignSelf: 'center',
    position: buttonFixed ? 'fixed' : 'relative',
    width: `${buttonWidth}vw`,
  }) as typeof Button;

  return (
    <StyledButton
      variant="contained"
      color="enable"
      component={motion.div}
      whileTap={{ scale: 0.95 }}
      initial="initial"
      animate="animate"
      variants={animVariant}
      exit={exitAnim}
      onClick={handleClick}
      disableElevation
      disableRipple
    >
      {buttonText}
    </StyledButton>
  );
};
