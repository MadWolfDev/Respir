import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useBreathModeStore } from '../../../store/breathModeStore';

export const BlockInAnimation = () => {
  const animDuration: number = useBreathModeStore(
    (state) => state.breathModeSelected.blockInDuration
  );

  const blockInAnimation = {
    initial: { y: '0vh' },
    animate: {
      y: '0vh',
      transition: {
        duration: animDuration,
      },
    },
  };

  return animDuration > 0 ? (
    <motion.div initial="initial" animate="animate" variants={blockInAnimation}>
      <Typography variant="h1">Maintenez</Typography>
    </motion.div>
  ) : null;
};
