import { AnimVariant } from '../domain/createBreathAnimationVariants';
import { motion } from 'framer-motion';
import { Button, styled } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { createButtonWidth } from '../../../libs/design-system/createValuesWithScreenSize';
import { Spacer } from '../../../libs/design-system/Spacer';

export const ReturnButton = ({ handleClick }: { handleClick: () => void }) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

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

  useEffect(() => {
    window.onclick = () => {
      setButtonDisabled(false);
    };
  }, []);

  return !buttonDisabled ? (
    <>
      <Container whileTap={{ scale: 0.95 }}>
        <StyledReturnButton
          variant="contained"
          onClick={handleClick}
          color="enable"
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
      <Spacer direction="VERTICAL" spacingFactor={1} spacingFactorFixed />
    </>
  ) : null;
};

const Container = styled(motion.div)({
  alignSelf: 'center',
  textAlign: 'center',
  //@todo documenter les z-index avec un shéma dans un readme et justifier leur utilisation
  zIndex: 3,
});

const StyledReturnButton = motion(
  styled(Button)({
    width: `${createButtonWidth({ targetWidth: 35, buttonSize: 'small' })}vw`,
  })
);
