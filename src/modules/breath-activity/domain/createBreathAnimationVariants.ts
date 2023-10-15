//@todo faire des tests unitaires de cette fonction géante pour bien illustrer chaque cas d'utilisation de cette fonction (settings relaxation, cohérence, vitalisation, custom...
//C'est vraiment le coeur du bon fonctionnement de ton animation, tu veux être sur de ne pas avoir de régression là dessus)

// @todo tester unitairement
export const createCorrectAnimation = (
  animationBehavioursPerTime: string[] | number[],
  blockOut: number,
  blockIn: number
) => {
  blockOut === 0 && animationBehavioursPerTime.splice(4, 1);
  blockIn === 0 && animationBehavioursPerTime.splice(2, 1);
  return animationBehavioursPerTime;
};

export const createBreathAnimationVariants = ({
  blockIn,
  blockOut,
  breathIn,
  breathOut,
  sessionDuration,
}: {
  blockIn: number;
  blockOut: number;
  breathIn: number;
  breathOut: number;
  sessionDuration: number;
}): {
  [key: string]: AnimVariant;
} => {
  const onMobile: boolean = window.innerWidth < 500;

  const breathDurations: number[] = [breathIn, blockIn, breathOut, blockOut];
  const animDuration: number = breathDurations.reduce(
    (duration, total) => (total += duration)
  );

  const animTimes: number[] = [0];
  breathDurations.map(
    (breathDuration) =>
      breathDuration > 0 &&
      animTimes.push(
        animTimes[animTimes.length - 1] + breathDuration / animDuration
      )
  );

  animTimes.map(
    (animTime, index) => (animTimes[index] = Number(animTime.toFixed(2)))
  );

  const blockOutAnimTimes: number[] = Object.assign([], animTimes);

  //The blockOutAnim needs an additional time to work
  const BLOCKOUT_TIME_VALUE_TO_ADD = 0.025;
  blockOut > 0 &&
    (blockIn > 0
      ? blockOutAnimTimes.splice(
          4,
          0,
          animTimes[3] + BLOCKOUT_TIME_VALUE_TO_ADD
        )
      : blockOutAnimTimes.splice(
          3,
          0,
          animTimes[2] + BLOCKOUT_TIME_VALUE_TO_ADD
        ));

  const repeats: number = Math.ceil((sessionDuration * 60) / animDuration) - 1;

  return {
    defaultShampeAnimation: {
      initial: { backgroundPositionY: '-45vh' },
      animate: {
        backgroundPositionY: createCorrectAnimation(
          ['-45vh', '100vh', '100vh', '-45vh', '-45vh'],
          blockOut,
          blockIn
        ),
        transition: {
          repeat: repeats,
          duration: animDuration,
          ease: 'easeOut',
          times: animTimes,
        },
      },
    },
    mountainsAnimation: {
      initial: { backgroundPositionY: '-45vh' },
      animate: {
        backgroundPositionY: createCorrectAnimation(
          [
            `-${onMobile ? 45 : 60}vh`,
            `${onMobile ? 45 : 15}vh`,
            `${onMobile ? 45 : 15}vh`,
            `-${onMobile ? 45 : 60}vh`,
            `-${onMobile ? 45 : 60}vh`,
          ],
          blockOut,
          blockIn
        ),
        transition: {
          repeat: repeats,
          duration: animDuration,
          ease: 'easeOut',
          times: animTimes,
        },
      },
    },
    breathInTextAnimation: {
      initial: { y: '45vh' },
      animate: {
        y: createCorrectAnimation(
          ['40vh', '-100vh', '-100vh', '-100vh', '-100vh'],
          blockOut,
          blockIn
        ),
        transition: {
          repeat: repeats,
          duration: animDuration,
          ease: 'easeOut',
          times: animTimes,
        },
      },
    },
    breathOutTextAnimation: {
      initial: { y: '-100vh' },
      animate: {
        y: createCorrectAnimation(
          ['-120vh', '-120vh', '-120vh', '35vh', '35vh'],
          blockOut,
          blockIn
        ),
        transition: {
          repeat: repeats,
          duration: animDuration,
          ease: 'easeOut',
          times: animTimes,
        },
      },
    },
    blockInTextAnimation: {
      initial: { y: '100vh' },
      animate: {
        y: createCorrectAnimation(
          ['100vh', '-20vh', '-55vh', '-50vh', '-20vh'],
          blockOut,
          blockIn
        ),
        rotate: createCorrectAnimation([-20, -20, 0, 20, 0], blockOut, blockIn),
        transition: {
          repeat: repeats,
          duration: animDuration,
          ease: 'circOut',
          times: animTimes,
        },
      },
    },
    blockOutTextAnimation: {
      initial: { y: '-60vh' },
      animate: {
        y: createCorrectAnimation(
          ['-60vh', '-60vh', '-60vh', '-40vh', '-60vh'],
          blockOut,
          blockIn
        ),
        opacity: createCorrectAnimation([0, 0, 0, 0, 1, 0], blockOut, blockIn),
        transition: {
          repeat: repeats,
          duration: animDuration,
          ease: 'linear',
          times: blockOutAnimTimes,
        },
      },
    },
  };
};

/**
 * @initial define the initial state of the component before the animation
 * @animate define the state or states to achieve at the end of the animation
 * @transition define the rules of the animation
 * @duration define the duration of a complete breathPhase, when all breathStages (breathIn, blockIn, breathOut, blockOut) have finished
 * @repeat define how many times the complete breathPhase should run before ending
 * @ease define how the animation curve should be slightly modify
 * @times define time milestones for the animation. At the first milestone, "y" should have reached its first value
 * @delay define the delay before the animation should start
 * @backgroundPositionY define the position of an image in background
 * @y define the vertical position of the animated component
 * @opacity define wether we can see the animated component or not
 * @x define the horizontal position of the animated component
 * @rotate define the rotation of the animated component
 * @scale define the size of the animated component
 */

export type AnimVariant = {
  initial: {
    backgroundPositionY?: string;
    y?: string;
    opacity?: number;
    x?: string;
  };
  animate: {
    backgroundPositionY?: string[] | number[];
    y?: string[] | number[] | string;
    x?: string;
    rotate?: number[] | string[];
    scale?: number[] | string[];
    opacity?: number[] | string[];
    transition: {
      repeat?: number;
      duration?: number;
      ease?: string;
      times?: number[];
      delay?: number;
    };
  };
};

export type ExitAnim = {
  y?: string;
  x?: string;
  transition: { duration: number; delay?: number; ease?: string };
};
