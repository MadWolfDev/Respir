import Bellsound from '../../user-settings/view/sons/Bell.mp3';
import { BreathConfig } from '../../breath-settings/domain/customBreathModeStore';
import Sound, { ReactSoundProps } from 'react-sound';
import { useMusicStore } from '../../user-settings/domain/musicStore';
import { useState } from 'react';

let interval1: NodeJS.Timer;
let interval2: NodeJS.Timer;
let interval3: NodeJS.Timer;
let interval4: NodeJS.Timer;

export const clearIntervals = () => {
  clearInterval(interval1);
  clearInterval(interval2);
  clearInterval(interval3);
  clearInterval(interval4);
};

export const BreathStageSoundEffect = ({
  breathConfig,
}: {
  breathConfig: BreathConfig;
}) => {
  const volume = useMusicStore((state) => state.volume);
  const completeBreathCircleDuration =
    (breathConfig.breathInDuration +
      breathConfig.blockInDuration +
      breathConfig.breathOutDuration +
      breathConfig.blockOutDuration) *
    1000;

  const [playStatus, setPlayStatus] = useState<'PLAYING' | 'STOPPED'>(
    'STOPPED'
  );
  const soundStatus: ReactSoundProps['playStatus'] = playStatus;
  const playSound = () => {
    playStatus !== 'PLAYING' && setPlayStatus('PLAYING');
  };
  const handleSoundFinished = () => {
    setPlayStatus('STOPPED');
  };

  //BreathIn sound effect
  setTimeout(() => {
    playSound();
    if (interval1 === undefined) {
      interval1 = setInterval(() => {
        setPlayStatus('PLAYING');
      }, completeBreathCircleDuration);
    }
  }, breathConfig.breathInDuration * 1000);

  //BlockIn sound effect
  if (breathConfig.blockInDuration !== 0) {
    setTimeout(() => {
      //playSound();
      if (interval2 === undefined) {
        interval2 = setInterval(() => {
          playSound();
        }, completeBreathCircleDuration);
      }
    }, (breathConfig.breathInDuration + breathConfig.blockInDuration) * 1000);
  }

  //BreathOut sound effect
  setTimeout(() => {
    //playSound();
    if (interval3 === undefined) {
      interval3 = setInterval(() => {
        setPlayStatus('PLAYING');
      }, completeBreathCircleDuration);
    }
  }, (breathConfig.breathInDuration + breathConfig.blockInDuration + breathConfig.breathOutDuration) * 1000);

  //BlockOut sound effect
  if (breathConfig.blockOutDuration !== 0) {
    setTimeout(() => {
      //playSound();
      if (interval4 === undefined) {
        interval4 = setInterval(() => {
          playSound();
        }, completeBreathCircleDuration);
      }
    }, (breathConfig.breathInDuration + breathConfig.blockInDuration + breathConfig.breathOutDuration + breathConfig.blockOutDuration) * 1000);
  }

  return (
    <Sound
      url={Bellsound}
      playStatus={soundStatus}
      playFromPosition={0}
      onFinishedPlaying={handleSoundFinished}
      volume={volume + 10}
    />
  );
};
