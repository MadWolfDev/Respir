import { useState } from 'react';
import styled from '@emotion/styled';
import { BreathInAnimation } from './breath-animations/BreathInAnimation';
import { useBreathModeStore } from '../../store/breathModeStore';
import { BreathOutAnimation } from './breath-animations/BreathOutAnimation';
import { BlockInAnimation } from './breath-animations/BlockInAnimation';
import { BlockOutAnimation } from './breath-animations/BlockOutAnimation';
import { defaultBreathConfigs } from '../../store/defaultBreathConfigs';
import { useCustomBreathModeStore } from '../../store/customBreathModeStore';

const computeNextBreathStage = (index: number, breathStagesLength: number) => {
  return index++ === breathStagesLength - 1 ? 0 : index++;
};

export const BreathAnimationManager = () => {
  const selectedBreathMode = useBreathModeStore(
    (state) => state.selectedBreathMode
  );
  const customBreathConfig = useCustomBreathModeStore(
    (state) => state.breathConfig
  );

  const selectedBreathConfig =
    selectedBreathMode !== 'custom'
      ? defaultBreathConfigs[selectedBreathMode]
      : customBreathConfig;

  const breathStages = [
    {
      animation: (
        <BreathInAnimation
          animDuration={selectedBreathConfig.breathInDuration}
        />
      ),
      duration: selectedBreathConfig.breathInDuration,
    },
    {
      animation: (
        <BlockInAnimation animDuration={selectedBreathConfig.blockInDuration} />
      ),
      duration: selectedBreathConfig.blockInDuration,
    },
    {
      animation: (
        <BreathOutAnimation
          animDuration={selectedBreathConfig.breathOutDuration}
        />
      ),
      duration: selectedBreathConfig.breathOutDuration,
    },
    {
      animation: (
        <BlockOutAnimation
          animDuration={selectedBreathConfig.blockOutDuration}
        />
      ),
      duration: selectedBreathConfig.blockOutDuration,
    },
  ] as const;
  const [breathStageIndex, setBreathStageIndex] = useState<number>(0);

  setTimeout(() => {
    setBreathStageIndex(
      computeNextBreathStage(breathStageIndex, breathStages.length)
    );
  }, breathStages[breathStageIndex].duration * 950);

  return (
    <BreathAnimDiv data-testid="breath-anim">
      {breathStages[breathStageIndex].animation}
    </BreathAnimDiv>
  );
};

const BreathAnimDiv = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
