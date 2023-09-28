import { IconButton, styled } from '@mui/material';
import { Settings } from '@mui/icons-material';
import { motion } from 'framer-motion';

export const ParameterButton = () => {
  return (
    <Container>
      <StyledIconButton disableRipple color="custom" whileTap={{ scale: 0.9 }}>
        <Settings fontSize="large" />
      </StyledIconButton>
    </Container>
  );
};

const Container = styled(motion.div)({
  alignSelf: 'end',
  display: 'flex',
  flex: 1,
});

const StyledIconButton = motion(
  styled(IconButton)({
    width: '50px',
    height: '50px',
  })
);
