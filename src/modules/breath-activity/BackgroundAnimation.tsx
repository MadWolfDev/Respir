import { styled } from '@mui/material';
import { AnimVariant } from './createBreathAnimationVariants';
import { motion } from 'framer-motion';
import mountains from '../../data/images/Mountains.svg';
import shampe from '../../data/images/Shampe_Mstr.svg';

export const BackgroundAnimation = ({
  mountainsAnimVariant,
  shampeAnimVariant,
  shampesNumber,
  hasBlockInAnim,
  hasBlockOutAnim,
  handleAnimationComplete,
}: {
  mountainsAnimVariant: AnimVariant;
  shampeAnimVariant: AnimVariant;
  shampesNumber: number;
  hasBlockInAnim: boolean;
  hasBlockOutAnim: boolean;
  handleAnimationComplete: () => void;
}) => {
  const shampeAnimVariants: AnimVariant[] = new Array(shampesNumber);
  shampeAnimVariants.fill(shampeAnimVariant);

  for (let i = 0; i < shampesNumber; i++) {
    const backgroundPositionsY = [
      '-45vh',
      `${100 + 35 * i}vh`,
      `${100 + 35 * i}vh`,
      '-45vh',
      '-45vh',
    ];

    !hasBlockOutAnim && backgroundPositionsY.splice(4, 1);
    !hasBlockInAnim && backgroundPositionsY.splice(2, 1);

    shampeAnimVariants[i] = {
      ...shampeAnimVariants[i],
      animate: {
        ...shampeAnimVariants[i].animate,
        backgroundPositionY: backgroundPositionsY,
      },
    };
  }

  const renderShampeAnimations = (
    index: number,
    children?: JSX.Element
  ): JSX.Element => {
    return index >= 0 ? (
      renderShampeAnimations(
        index - 1,
        <Image
          initial="initial"
          animate="animate"
          variants={shampeAnimVariants[index]}
          url={shampe}
        >
          {children}
        </Image>
      )
    ) : (
      <Image
        variants={mountainsAnimVariant}
        initial="initial"
        animate="animate"
        url={mountains}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </Image>
    );
  };

  return renderShampeAnimations(shampesNumber - 1);
};

const Image = styled(motion.div)<{ url: string }>(({ url }) => ({
  backgroundImage: `url(${url})`,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: 1,
}));
