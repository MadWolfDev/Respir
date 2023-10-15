import { AnimVariant } from '../../../../breath-activity/domain/createBreathAnimationVariants';

const SLIDERS_MOVEMENT: number = 100; //vw

export const createSlidersVariantAnim = (
  slidersNumber: number
): AnimVariant[] => {
  const SliderAnimVariant: AnimVariant = {
    initial: { x: `${SLIDERS_MOVEMENT}vw` },
    animate: {
      x: '0vh',
      transition: { duration: 0.75, delay: 0, ease: 'backOut' },
    },
  };

  const slidersAnimVariants: AnimVariant[] = new Array(slidersNumber).fill(
    SliderAnimVariant
  );

  for (let i = 0; i < slidersNumber; i++) {
    slidersAnimVariants[i] = {
      ...slidersAnimVariants[i],
      initial: { x: `${i % 2 === 0 ? SLIDERS_MOVEMENT : -SLIDERS_MOVEMENT}vw` },
      animate: {
        ...slidersAnimVariants[i].animate,
        transition: {
          ...slidersAnimVariants[i].animate.transition,
          delay: i * 0.05,
        },
      },
    };
  }

  return slidersAnimVariants;
};
