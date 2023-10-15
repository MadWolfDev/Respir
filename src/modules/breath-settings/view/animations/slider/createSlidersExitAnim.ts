import { ExitAnim } from '../../../../breath-activity/domain/createBreathAnimationVariants';

const SLIDERS_MOVEMENT: number = 100; //vw

export const createSlidersExitAnim = (slidersNumber: number): ExitAnim[] => {
  const SliderExitAnim: ExitAnim = {
    x: '0vw',
    transition: { duration: 0.75, delay: 0.25, ease: 'anticipate' },
  };

  const slidersExitAnims: ExitAnim[] = new Array(slidersNumber).fill(
    SliderExitAnim
  );

  for (let i = 0; i < slidersNumber; i++) {
    slidersExitAnims[i] = {
      ...slidersExitAnims[i],
      x: `${i % 2 === 0 ? SLIDERS_MOVEMENT : -SLIDERS_MOVEMENT}vw`,
      transition: { ...slidersExitAnims[i].transition, delay: 0.25 - i * 0.05 },
    };
  }

  return slidersExitAnims;
};
