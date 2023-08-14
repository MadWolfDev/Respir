import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useBreathModeStore } from '../../../store/breathModeStore';

export const BreathOutAnimation = () => {
  const animDuration: number = useBreathModeStore(
    (state) => state.breathModeSelected.breathOutDuration
  );

  const breathOutAnimation = {
    initial: { y: '-40vh' },
    animate: {
      y: '45vh',
      transition: {
        duration: animDuration,
      },
    },
  };

  return animDuration > 0 ? (
    <motion.div
      initial="initial"
      animate="animate"
      variants={breathOutAnimation}
    >
      <Typography variant="h1">Expirez</Typography>
    </motion.div>
  ) : null;
};
