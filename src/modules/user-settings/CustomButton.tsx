import { Button, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimVariant } from '../breath-activity/createBreathAnimationVariants';
import { ExitAnim } from './createUIAnimation';
import { createButtonWidth } from './createValuesWithScreenSize';

export const CustomButton = ({
  buttonWidth = createButtonWidth({ targetWidth: 60 }),
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
    // @todo utiliser le thème pour cette valeur
    borderRadius: 15,
    // @todo la margin doit toujours être géré par le parent, idéalement à l'aide d'un composant spacer. Là tu as le risque d'avoir des comportements incompréhensibles.
    // https://www.bam.tech/article/standardising-empty-space-in-jsx-with-styled-components
    // idéalement ton spacer se base sur des valeurs d'espacement du thème pour assurer la consistance de l'app
    marginBottom: `${buttonMarginBottom}em`,
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
