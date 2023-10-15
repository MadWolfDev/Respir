import { ExitAnim } from '../../../../breath-activity/domain/createBreathAnimationVariants';

const BUTTON_SIZE: number = 36.5; //px

export const createButtonsExitAnim = (buttonsNumber: number): ExitAnim[] => {
  const ButtonExitAnim: ExitAnim = {
    y: `${BUTTON_SIZE}px`,
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
