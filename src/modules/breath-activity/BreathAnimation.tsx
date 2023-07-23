import React, { useState } from 'react';

const breathStages = ['Inspire', 'Maintiens', 'Expire', 'Bloque'] as const
type BreathStageType = typeof breathStages[number];
const STAGE_DURATION : number = 5000; 

const computeNextBreathStage = (index : number) => {
    return index++ === breathStages.length-1 ? 0 : index++;
}

export const BreathAnimation = () => {
    const [breathStageIndex, setBreathStageIndex] = useState<number>(0);

    setTimeout(() => {
        setBreathStageIndex(computeNextBreathStage(breathStageIndex));
    }, STAGE_DURATION);

    return (
        <h1>{breathStages[breathStageIndex]}</h1>
    )
}

