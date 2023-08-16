import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useBreathModeStore } from '../../../store/breathModeStore';

export const BreathInAnimation = ({
  animDuration,
}: {
  animDuration: number;
}) => {
  const breathInAnimation = {
    initial: { y: '45vh' },
    animate: {
      y: '-40vh',
      transition: {
        duration: animDuration,
      },
    },
  };

  return animDuration > 0 ? (
    <motion.div
      initial="initial"
      animate="animate"
      variants={breathInAnimation}
    >
      <Typography variant="h1">Inspirez</Typography>
    </motion.div>
  ) : null;
};
