import React, { useState } from 'react';
import { motion } from "framer-motion";
import styled from '@emotion/styled';


const breathStages = ['inspirez', 'expirez'] as const;
const STAGE_DURATION : number = 5000; 

const computeNextBreathStage = (index : number) => {
    return index++ === breathStages.length-1 ? 0 : index++;
}

export const BreathAnimation = () => {
    const [breathStageIndex, setBreathStageIndex] = useState<number>(0);

    const breathInAnimation = {
        initial: {y: '45vh'},
        animate: {y: '-40vh',
                    transition: {
                        duration: STAGE_DURATION /1000,
                    }},
    }

    const breathOutAnimation = {
        initial: {y: '-40vh'},
        animate: {y: '45vh',
                    transition: {
                        duration: STAGE_DURATION /1000,
                    }},
    }

    setTimeout(() => {
        setBreathStageIndex(computeNextBreathStage(breathStageIndex));
    }, STAGE_DURATION);

    return (
        <BreathAnimDiv>
            <motion.div
                key={breathStageIndex}
                initial= 'initial'
                animate= 'animate'
                variants= { breathStageIndex === 0 ? breathInAnimation : breathOutAnimation}
            >
                <BreathAnimText>{breathStages[breathStageIndex]}</BreathAnimText>
            </motion.div>
        </BreathAnimDiv>
    );
};

const BreathAnimDiv = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
`
const BreathAnimText = styled.h1`
    font-weight: 700;
    color: #FFEFF2;
`