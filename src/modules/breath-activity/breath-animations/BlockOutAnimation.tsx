import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useBreathModeStore } from '../../../store/breathModeStore';

export const BlockOutAnimation = ({
  animDuration,
}: {
  animDuration: number;
}) => {
  const blockOutAnimation = {
    initial: { y: '0vh' },
    animate: {
      y: '0vh',
      transition: {
        duration: animDuration,
      },
    },
  };

  return animDuration > 0 ? (
    <motion.div
      initial="initial"
      animate="animate"
      variants={blockOutAnimation}
    >
      <Typography variant="h1">Bloquez</Typography>
    </motion.div>
  ) : null;
};
