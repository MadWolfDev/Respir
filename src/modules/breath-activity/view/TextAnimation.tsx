import { Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimVariant } from '../domain/createBreathAnimationVariants';

export const TextAnimation = ({
  variant,
  content,
  zindex,
}: {
  variant: AnimVariant;
  content: string;
  zindex?: number;
}) => {
  return (
    <TextContentAnim
      initial="initial"
      animate="animate"
      variants={variant}
      zindex={zindex}
    >
      <Typography variant="h1">{content}</Typography>
    </TextContentAnim>
  );
};

const TextContentAnim = styled(motion.div)<{ zindex?: number }>(
  ({ zindex = 2 }) => ({
    alignSelf: 'center',
    position: 'fixed',
    zIndex: zindex,
  })
);
