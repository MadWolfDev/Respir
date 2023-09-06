import { Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';
import { AnimVariant } from './createBreathAnimationVariants';

export const TextAnimation = ({
  variant,
  content,
}: {
  variant: AnimVariant;
  content: string;
}) => {
  return (
    <TextContentAnim initial="initial" animate="animate" variants={variant}>
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
