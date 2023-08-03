import { useState } from 'react';
import styled from '@emotion/styled';
import { BreathInAnimation } from './breath-animations/BreathInAnimation';
import { useBreathModeStore } from '../../store/breathModeStore';
import { BreathOutAnimation } from './breath-animations/BreathOutAnimation';
import { BlockInAnimation } from './breath-animations/BlockInAnimation';
import { BlockOutAnimation } from './breath-animations/BlockOutAnimation';

const computeNextBreathStage = (index: number, breathStagesLength: number) => {
  return index++ === breathStagesLength - 1 ? 0 : index++;
};

export const BreathAnimationManager = () => {
  const breathModeSelected = useBreathModeStore(
    (state) => state.breathModeSelected
  );
  const breathStages = [
    {
      animation: <BreathInAnimation />,
      duration: breathModeSelected.breathInDuration,
    },
    {
      animation: <BlockInAnimation />,
      duration: breathModeSelected.blockInDuration,
    },
    {
      animation: <BreathOutAnimation />,
      duration: breathModeSelected.breathOutDuration,
    },
    {
      animation: <BlockOutAnimation />,
      duration: breathModeSelected.blockOutDuration,
    },
  ] as const;
  const [breathStageIndex, setBreathStageIndex] = useState<number>(0);

  setTimeout(() => {
    setBreathStageIndex(
      computeNextBreathStage(breathStageIndex, breathStages.length)
    );
  }, breathStages[breathStageIndex].duration * 1000);

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
