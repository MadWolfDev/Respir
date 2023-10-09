import { styled } from '@mui/material';
import { AnimVariant } from './createBreathAnimationVariants';
import { motion } from 'framer-motion';
import mountains from '../../data/images/Mountains.png';
import shampe from '../../data/images/Shampe_Mstr.png';
import mountainsPC from '../../data/images/Mountains_PC.png';
import shampePC from '../../data/images/Shampe_PC.png';

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
  const onMobile: boolean = window.innerWidth < 500;

  for (let i = 0; i < shampesNumber; i++) {
    const backgroundPositionsY = [
      `-${onMobile ? 45 : 60}vh`,
      `${100 + 35 * i}vh`,
      `${100 + 35 * i}vh`,
      `-${onMobile ? 45 : 60}vh`,
      `-${onMobile ? 45 : 60}vh`,
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

  //@todo extraire cette fonction au dessus du composant
  const renderShampeAnimations = (
    //@todo index c'est pas très parlant. Certes tu itères sur un tableau de shampe mais peut-être qu'on pourrait plutôt nommer ça shampeLeftToRender ou un truc du genre
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
          url={onMobile ? shampe : shampePC}
        >
          {children}
        </Image>
      )
    ) : (
      <Image
        variants={mountainsAnimVariant}
        initial="initial"
        animate="animate"
        url={onMobile ? mountains : mountainsPC}
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
