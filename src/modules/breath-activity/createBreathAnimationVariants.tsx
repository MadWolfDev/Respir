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
  const breathDurations: number[] = [breathIn, blockIn, breathOut, blockOut];
  const animDuration: number = breathDurations.reduce(
    (duration, total) => (total += duration)
  );

  const animTimes: number[] = [0];
  breathDurations.map((breathDuration) => {
    breathDuration > 0 &&
      animTimes.push(
        animTimes[animTimes.length - 1] + breathDuration / animDuration
      );
  });

  animTimes.map((animTime, index) => {
    animTimes[index] = Number(animTime.toFixed(2));
  });

  const blockOutAnimTimes: number[] = Object.assign([], animTimes);

  blockOut > 0 &&
    (blockIn > 0
      ? blockOutAnimTimes.splice(4, 0, animTimes[3] + 0.025)
      : blockOutAnimTimes.splice(3, 0, animTimes[2] + 0.025));

  const repeats: number = Math.ceil((sessionDuration * 60) / animDuration) - 1;

  const createCorrectAnimation = (
    animationBehavioursPerTime: string[] | number[]
  ) => {
    blockOut === 0 && animationBehavioursPerTime.splice(4, 1);
    blockIn === 0 && animationBehavioursPerTime.splice(2, 1);
    return animationBehavioursPerTime;
  };

  return {
    defaultShampeAnimation: {
      initial: { backgroundPositionY: '-45vh' },
      animate: {
        backgroundPositionY: createCorrectAnimation([
          '-45vh',
          '100vh',
          '100vh',
          '-45vh',
          '-45vh',
        ]),
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
        backgroundPositionY: createCorrectAnimation([
          '-45vh',
          '45vh',
          '45vh',
          '-45vh',
          '-45vh',
        ]),
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
        y: createCorrectAnimation([
          '40vh',
          '-100vh',
          '-100vh',
          '-100vh',
          '-100vh',
        ]),
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
        y: createCorrectAnimation([
          '-120vh',
          '-120vh',
          '-120vh',
          '35vh',
          '35vh',
        ]),
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
        y: createCorrectAnimation([
          '100vh',
          '-20vh',
          '-55vh',
          '-50vh',
          '-20vh',
        ]),
        rotate: createCorrectAnimation([-20, -20, 0, 20, 0]),
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
        y: createCorrectAnimation([
          '-60vh',
          '-60vh',
          '-60vh',
          '-40vh',
          '-60vh',
        ]),
        opacity: createCorrectAnimation([0, 0, 0, 0, 1, 0]),
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

export type AnimVariant = {
  initial: { backgroundPositionY?: string; y?: string; opacity?: number };
  animate: {
    backgroundPositionY?: string[] | number[];
    y?: string[] | number[];
    rotate?: number[] | string[];
    scale?: number[] | string[];
    opacity?: number[] | string[];
    transition: {
      repeat: number;
      duration: number;
      ease: string;
      times: number[];
    };
  };
};
