import { Button, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimVariant } from '../breath-activity/createBreathAnimationVariants';
import { ExitAnim } from './BreathModesScreen';

export const CustomButton = ({
  buttonWidth = 15,
  buttonFixed = false,
  animVariant,
  exitAnim,
  handleClick,
  buttonText,
}: {
  buttonText: string;
  handleClick: (arg0?: any) => void;
  buttonWidth?: number;
  buttonFixed?: boolean;
  animVariant?: AnimVariant;
  exitAnim?: ExitAnim;
}) => {
  const StyledButton = styled(Button)({
    alignSelf: 'center',
    position: buttonFixed ? 'fixed' : 'relative',
    width: `${buttonWidth}em`,
  }) as typeof Button;

  return (
    <StyledButton
      variant="contained"
      component={motion.div}
      initial="initial"
      animate="animate"
      variants={animVariant}
      exit={exitAnim}
      onClick={handleClick}
    >
      {buttonText}
    </StyledButton>
  );
};
