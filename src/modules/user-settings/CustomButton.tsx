import { Button, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimVariant } from '../breath-activity/createBreathAnimationVariants';
import { ExitAnim } from './createUIAnimation';

export const CustomButton = ({
  buttonWidth = 60,
  buttonFixed = false,
  buttonMarginBottom = 0,
  animVariant,
  exitAnim,
  handleClick,
  buttonText,
}: {
  buttonText: string;
  handleClick: () => void;
  buttonWidth?: number;
  buttonMarginBottom?: number;
  buttonFixed?: boolean;
  animVariant?: AnimVariant;
  exitAnim?: ExitAnim;
}) => {
  const StyledButton = styled(Button)({
    alignSelf: 'center',
    position: buttonFixed ? 'fixed' : 'relative',
    width: `${buttonWidth}vw`,
    borderRadius: 15,
    marginBottom: `${buttonMarginBottom}em`,
  }) as typeof Button;

  return (
    <StyledButton
      variant="contained"
      color="custom"
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
