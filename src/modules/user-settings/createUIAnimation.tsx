import { AnimVariant } from '../breath-activity/createBreathAnimationVariants';

const BUTTONS_MOVEMENT: number = 3.5; //em
const SLIDERS_MOVEMENT: number = 100; //vw

// @todo ce fichier fait un peu fourre tout. 
// J'aurais plutôt fait un truc comme ça dans l'arboresence de fichier pour que ce soit plus facile de retrouver les choses par thématique
// user-settings
// |_ button
//    |_ createButtonsExitAnim
//    |_ createButtonsVariantAnim
//    |_ CustomButton
// |_ slider
//    |_ createSlidersExitAnim
//    |_ createSlidersVariantAnim
//    |_ CustomSlider
export const createButtonsExitAnim = (buttonsNumber: number): ExitAnim[] => {
  const ButtonExitAnim: ExitAnim = {
    y: '2.6em',
    transition: { duration: 0.75, delay: 0, ease: 'anticipate' },
  };

  const buttonsExitAnims: ExitAnim[] = new Array(buttonsNumber).fill(
    ButtonExitAnim
  );

  for (let i = 0; i < buttonsNumber; i++) {
    buttonsExitAnims[i] = {
      ...buttonsExitAnims[i],
      transition: { ...buttonsExitAnims[i].transition, delay: i * 0.05 },
    };
  }

  return buttonsExitAnims;
};

export const createButtonsVariantAnim = (
  buttonsNumber: number
): AnimVariant[] => {
  const ButtonAnimVariant: AnimVariant = {
    initial: { y: '2.6em' },
    animate: {
      y: '0em',
      transition: { duration: 0.75, delay: 0.3, ease: 'backOut' },
    },
  };

  const buttonsAnimVariants: AnimVariant[] = new Array(buttonsNumber).fill(
    ButtonAnimVariant
  );

  for (let i = 0; i < buttonsNumber; i++) {
    buttonsAnimVariants[i] = {
      ...buttonsAnimVariants[i],
      animate: {
        ...buttonsAnimVariants[i].animate,
        y: `${-i * BUTTONS_MOVEMENT - 3}em`,
      },
    };
  }
  return buttonsAnimVariants;
};

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

export type ExitAnim = {
  y?: string;
  x?: string;
  transition: { duration: number; delay?: number; ease?: string };
};
