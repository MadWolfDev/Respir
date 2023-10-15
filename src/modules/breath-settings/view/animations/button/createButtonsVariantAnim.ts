import { AnimVariant } from '../../../../breath-activity/domain/createBreathAnimationVariants';

const BUTTONS_MOVEMENT: number = 45; //px
const BUTTON_SIZE: number = 36.5; //px

export const createButtonsVariantAnim = (
  buttonsNumber: number
): AnimVariant[] => {
  const ButtonAnimVariant: AnimVariant = {
    initial: { y: `${BUTTON_SIZE}px` },
    animate: {
      y: '0px',
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
        y: `${-i * BUTTONS_MOVEMENT - BUTTONS_MOVEMENT}px`,
      },
    };
  }
  return buttonsAnimVariants;
};
