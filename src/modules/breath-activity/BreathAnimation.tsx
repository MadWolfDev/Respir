import React, { useState } from 'react';
import { motion } from "framer-motion";
import './BreathAnimation.css';

const breathStages = ['Inspire', 'Expire'] as const;
const STAGE_DURATION : number = 5000; 

const computeNextBreathStage = (index : number) => {
    return index++ === breathStages.length-1 ? 0 : index++;
}

export const BreathAnimation = () => {
    const [breathStageIndex, setBreathStageIndex] = useState<number>(0);

    const inspireAnimation = {
        initial: {top: '-10%'},
        animate: {top: '50%',
                    transition: {
                        duration: 5,
                    }},
    }

    const expireAnimation = {
        initial: {top: '50%'},
        animate: {top: '110%',
                    transition: {
                        duration: 5,
                    }},
    }

    setTimeout(() => {
        setBreathStageIndex(computeNextBreathStage(breathStageIndex));
    }, STAGE_DURATION);

    return (
        <motion.div className='breath-animation-text'
            key={breathStageIndex}
            initial= 'initial'
            animate= 'animate'
            variants= { breathStageIndex === 0 ? inspireAnimation : expireAnimation}
        >
            <h1>{breathStages[breathStageIndex]}</h1>
        </motion.div>
    );
};

