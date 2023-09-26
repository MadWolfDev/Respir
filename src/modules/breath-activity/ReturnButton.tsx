import { AnimVariant } from './createBreathAnimationVariants';
import { motion } from 'framer-motion';
import { Button, styled } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

export const ReturnButton = ({
  handleClick,
  buttonDisabled,
  setButtonDisabled,
}: {
  handleClick: () => void;
  buttonDisabled: boolean;
  setButtonDisabled: Dispatch<SetStateAction<boolean>>;
}) => {
  const ButtonAnimationVariant: AnimVariant = {
    initial: { opacity: 1 },
    animate: {
      opacity: [0, 1, 1, 0],
      transition: { duration: 6, times: [0, 0.2, 0.35, 1] },
    },
  };

  const removeButton = () => {
    setButtonDisabled(true);
  };

  return !buttonDisabled ? (
    <Container whileTap={{ scale: 0.95 }}>
      <StyledReturnButton
        variant="contained"
        onClick={handleClick}
        color="custom"
        variants={ButtonAnimationVariant}
        initial="initial"
        animate="animate"
        onAnimationComplete={removeButton}
        disableElevation
        disableRipple
      >
        Retour
      </StyledReturnButton>
    </Container>
  ) : null;
};

const Container = styled(motion.div)({
  marginBottom: '1.5em',
  alignSelf: 'center',
  textAlign: 'center',
  zIndex: 3,
});

const StyledReturnButton = motion(
  styled(Button)({
    width: '35vw',
    borderRadius: 50,
  })
);
