import {
  createBreathAnimationVariants,
  createCorrectAnimation,
} from './createBreathAnimationVariants';

describe('createCorrectAnimation', () => {
  it('should remove blockIn behaviour from time array', () => {
    const result = createCorrectAnimation([0, 0, 10, 20, 10], 10, 0);
    expect(result).toEqual([0, 0, 20, 10]);
  });

  it('should remove blockOut behaviour from time array', () => {
    const result = createCorrectAnimation([0, 0, 10, 20, 10], 0, 10);
    expect(result).toEqual([0, 0, 10, 20]);
  });

  it('should remove blockOut and blockIn behaviours from time array', () => {
    const result = createCorrectAnimation([0, 0, 10, 20, 10], 0, 0);
    expect(result).toEqual([0, 0, 20]);
  });

  it('should remove nothing from time array', () => {
    const result = createCorrectAnimation([0, 0, 10, 20, 10], 10, 10);
    expect(result).toEqual([0, 0, 10, 20, 10]);
  });

  it('should not create an error when array is to short', () => {
    const result = createCorrectAnimation([0, 0, 10], 0, 0);
    expect(result).toEqual([0, 0]);
  });
});

describe('createBreathAnimationVariants in case of square breath', () => {
  const callCreateBreathAnimationVariantsWithSquareVariant = () =>
    createBreathAnimationVariants({
      breathIn: 5,
      breathOut: 4,
      blockIn: 3,
      blockOut: 2,
      sessionDuration: 6,
    });

  it('should animate properly mountains', () => {
    const result = callCreateBreathAnimationVariantsWithSquareVariant();

    //5 because blockIn and blockOut are defined
    expect(result.mountainsAnimation.animate.backgroundPositionY?.length).toBe(
      5
    );

    //14 because it should be the sum of all breath durations
    expect(result.mountainsAnimation.animate.transition.duration).toBe(14);

    //25 because (sessionDuration * 60) / animationDuration
    expect(result.mountainsAnimation.animate.transition.repeat).toBe(25);

    //Time array divide the time according to the breath stage repartition
    expect(result.mountainsAnimation.animate.transition.times).toEqual([
      0, 0.36, 0.57, 0.86, 1,
    ]);
    expect(result.mountainsAnimation).toEqual({
      animate: {
        backgroundPositionY: ['-60vh', '15vh', '15vh', '-60vh', '-60vh'],
        transition: {
          duration: 14,
          ease: 'easeOut',
          repeat: 25,
          times: [0, 0.36, 0.57, 0.86, 1],
        },
      },
      initial: {
        backgroundPositionY: '-45vh',
      },
    });
  });

  it('should animate properly the shampe', () => {
    const result = callCreateBreathAnimationVariantsWithSquareVariant();
    expect(result.defaultShampeAnimation).toEqual({
      animate: {
        backgroundPositionY: expect.any(Array),
        transition: {
          duration: 14,
          ease: 'easeOut',
          repeat: 25,
          times: [0, 0.36, 0.57, 0.86, 1],
        },
      },
      initial: {
        backgroundPositionY: '-45vh',
      },
    });
  });

  it('should animate properly the breathInTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithSquareVariant();
    expect(result.breathInTextAnimation).toEqual({
      animate: {
        y: ['40vh', '-100vh', '-100vh', '-100vh', '-100vh'],
        transition: {
          duration: 14,
          ease: 'easeOut',
          repeat: 25,
          times: [0, 0.36, 0.57, 0.86, 1],
        },
      },
      initial: {
        y: '45vh',
      },
    });
  });

  it('should animate properly the breathOutTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithSquareVariant();
    expect(result.breathOutTextAnimation).toEqual({
      animate: {
        y: ['-120vh', '-120vh', '-120vh', '35vh', '35vh'],
        transition: {
          duration: 14,
          ease: 'easeOut',
          repeat: 25,
          times: [0, 0.36, 0.57, 0.86, 1],
        },
      },
      initial: {
        y: '-100vh',
      },
    });
  });

  it('should animate properly the blockInTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithSquareVariant();
    expect(result.blockInTextAnimation).toEqual({
      animate: {
        y: ['100vh', '-20vh', '-55vh', '-50vh', '-20vh'],
        rotate: [-20, -20, 0, 20, 0],
        transition: {
          duration: 14,
          ease: 'circOut',
          repeat: 25,
          times: [0, 0.36, 0.57, 0.86, 1],
        },
      },
      initial: {
        y: '100vh',
      },
    });
  });

  it('should animate properly the blockOutTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithSquareVariant();
    expect(result.blockOutTextAnimation).toEqual({
      animate: {
        y: ['-60vh', '-60vh', '-60vh', '-40vh', '-60vh'],
        opacity: [0, 0, 0, 0, 1, 0],
        transition: {
          duration: 14,
          ease: 'linear',
          repeat: 25,
          times: [0, 0.36, 0.57, 0.86, 0.885, 1],
        },
      },
      initial: {
        y: '-60vh',
      },
    });
  });
});

describe('createBreathAnimationVariants in case of no blockIn', () => {
  const callCreateBreathAnimationVariantsWithNoBlockIn = () =>
    createBreathAnimationVariants({
      breathIn: 5,
      breathOut: 4,
      blockIn: 0,
      blockOut: 2,
      sessionDuration: 6,
    });

  it('should animate properly mountains', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockIn();

    //4 because blockOut is defined
    expect(result.mountainsAnimation.animate.backgroundPositionY?.length).toBe(
      4
    );

    //11 because it should be the sum of all breath durations
    expect(result.mountainsAnimation.animate.transition.duration).toBe(11);

    //32 because (sessionDuration * 60) / animationDuration
    expect(result.mountainsAnimation.animate.transition.repeat).toBe(32);

    //Time array divide the time according to the breath stage repartition
    expect(result.mountainsAnimation.animate.transition.times).toEqual([
      0, 0.45, 0.82, 1,
    ]);
    expect(result.mountainsAnimation).toEqual({
      animate: {
        backgroundPositionY: ['-60vh', '15vh', '-60vh', '-60vh'],
        transition: {
          duration: 11,
          ease: 'easeOut',
          repeat: 32,
          times: [0, 0.45, 0.82, 1],
        },
      },
      initial: {
        backgroundPositionY: '-45vh',
      },
    });
  });

  it('should animate properly the shampe', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockIn();
    expect(result.defaultShampeAnimation).toEqual({
      animate: {
        backgroundPositionY: expect.any(Array),
        transition: {
          duration: 11,
          ease: 'easeOut',
          repeat: 32,
          times: [0, 0.45, 0.82, 1],
        },
      },
      initial: {
        backgroundPositionY: '-45vh',
      },
    });
  });

  it('should animate properly the breathInTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockIn();
    expect(result.breathInTextAnimation).toEqual({
      animate: {
        y: ['40vh', '-100vh', '-100vh', '-100vh'],
        transition: {
          duration: 11,
          ease: 'easeOut',
          repeat: 32,
          times: [0, 0.45, 0.82, 1],
        },
      },
      initial: {
        y: '45vh',
      },
    });
  });

  it('should animate properly the breathOutTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockIn();
    expect(result.breathOutTextAnimation).toEqual({
      animate: {
        y: ['-120vh', '-120vh', '35vh', '35vh'],
        transition: {
          duration: 11,
          ease: 'easeOut',
          repeat: 32,
          times: [0, 0.45, 0.82, 1],
        },
      },
      initial: {
        y: '-100vh',
      },
    });
  });

  it('should animate properly the blockOutTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockIn();
    expect(result.blockOutTextAnimation).toEqual({
      animate: {
        y: ['-60vh', '-60vh', '-40vh', '-60vh'],
        opacity: [0, 0, 0, 1, 0],
        transition: {
          duration: 11,
          ease: 'linear',
          repeat: 32,
          times: [0, 0.45, 0.82, 0.845, 1],
        },
      },
      initial: {
        y: '-60vh',
      },
    });
  });
});

describe('createBreathAnimationVariants in case of no blockOut', () => {
  const callCreateBreathAnimationVariantsWithNoBlockOut = () =>
    createBreathAnimationVariants({
      breathIn: 5,
      breathOut: 4,
      blockIn: 3,
      blockOut: 0,
      sessionDuration: 6,
    });

  it('should animate properly mountains', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockOut();

    //4 because blockOut is defined
    expect(result.mountainsAnimation.animate.backgroundPositionY?.length).toBe(
      4
    );

    //12 because it should be the sum of all breath durations
    expect(result.mountainsAnimation.animate.transition.duration).toBe(12);

    //29 because (sessionDuration * 60) / animationDuration
    expect(result.mountainsAnimation.animate.transition.repeat).toBe(29);

    //Time array divide the time according to the breath stage repartition
    expect(result.mountainsAnimation.animate.transition.times).toEqual([
      0, 0.42, 0.67, 1,
    ]);
    expect(result.mountainsAnimation).toEqual({
      animate: {
        backgroundPositionY: ['-60vh', '15vh', '15vh', '-60vh'],
        transition: {
          duration: 12,
          ease: 'easeOut',
          repeat: 29,
          times: [0, 0.42, 0.67, 1],
        },
      },
      initial: {
        backgroundPositionY: '-45vh',
      },
    });
  });

  it('should animate properly the shampe', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockOut();
    expect(result.defaultShampeAnimation).toEqual({
      animate: {
        backgroundPositionY: expect.any(Array),
        transition: {
          duration: 12,
          ease: 'easeOut',
          repeat: 29,
          times: [0, 0.42, 0.67, 1],
        },
      },
      initial: {
        backgroundPositionY: '-45vh',
      },
    });
  });

  it('should animate properly the breathInTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockOut();
    expect(result.breathInTextAnimation).toEqual({
      animate: {
        y: ['40vh', '-100vh', '-100vh', '-100vh'],
        transition: {
          duration: 12,
          ease: 'easeOut',
          repeat: 29,
          times: [0, 0.42, 0.67, 1],
        },
      },
      initial: {
        y: '45vh',
      },
    });
  });

  it('should animate properly the breathOutTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockOut();
    expect(result.breathOutTextAnimation).toEqual({
      animate: {
        y: ['-120vh', '-120vh', '-120vh', '35vh'],
        transition: {
          duration: 12,
          ease: 'easeOut',
          repeat: 29,
          times: [0, 0.42, 0.67, 1],
        },
      },
      initial: {
        y: '-100vh',
      },
    });
  });

  it('should animate properly the blockInTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockOut();
    expect(result.blockInTextAnimation).toEqual({
      animate: {
        y: ['100vh', '-20vh', '-55vh', '-50vh'],
        rotate: [-20, -20, 0, 20],
        transition: {
          duration: 12,
          ease: 'circOut',
          repeat: 29,
          times: [0, 0.42, 0.67, 1],
        },
      },
      initial: {
        y: '100vh',
      },
    });
  });
});

describe('createBreathAnimationVariants in case of no blockOut and no blockIn', () => {
  const callCreateBreathAnimationVariantsWithNoBlockOutNoBlockIn = () =>
    createBreathAnimationVariants({
      breathIn: 5,
      breathOut: 4,
      blockIn: 0,
      blockOut: 0,
      sessionDuration: 6,
    });

  it('should animate properly mountains', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockOutNoBlockIn();

    //4 because blockOut is defined
    expect(result.mountainsAnimation.animate.backgroundPositionY?.length).toBe(
      3
    );

    //9 because it should be the sum of all breath durations
    expect(result.mountainsAnimation.animate.transition.duration).toBe(9);

    //39 because (sessionDuration * 60) / animationDuration
    expect(result.mountainsAnimation.animate.transition.repeat).toBe(39);

    //Time array divide the time according to the breath stage repartition
    expect(result.mountainsAnimation.animate.transition.times).toEqual([
      0, 0.56, 1,
    ]);
    expect(result.mountainsAnimation).toEqual({
      animate: {
        backgroundPositionY: ['-60vh', '15vh', '-60vh'],
        transition: {
          duration: 9,
          ease: 'easeOut',
          repeat: 39,
          times: [0, 0.56, 1],
        },
      },
      initial: {
        backgroundPositionY: '-45vh',
      },
    });
  });

  it('should animate properly the shampe', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockOutNoBlockIn();
    expect(result.defaultShampeAnimation).toEqual({
      animate: {
        backgroundPositionY: expect.any(Array),
        transition: {
          duration: 9,
          ease: 'easeOut',
          repeat: 39,
          times: [0, 0.56, 1],
        },
      },
      initial: {
        backgroundPositionY: '-45vh',
      },
    });
  });

  it('should animate properly the breathInTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockOutNoBlockIn();
    expect(result.breathInTextAnimation).toEqual({
      animate: {
        y: ['40vh', '-100vh', '-100vh'],
        transition: {
          duration: 9,
          ease: 'easeOut',
          repeat: 39,
          times: [0, 0.56, 1],
        },
      },
      initial: {
        y: '45vh',
      },
    });
  });

  it('should animate properly the breathOutTextAnimation', () => {
    const result = callCreateBreathAnimationVariantsWithNoBlockOutNoBlockIn();
    expect(result.breathOutTextAnimation).toEqual({
      animate: {
        y: ['-120vh', '-120vh', '35vh'],
        transition: {
          duration: 9,
          ease: 'easeOut',
          repeat: 39,
          times: [0, 0.56, 1],
        },
      },
      initial: {
        y: '-100vh',
      },
    });
  });
});
