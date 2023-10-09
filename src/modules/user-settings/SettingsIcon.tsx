import { IconButton, styled } from '@mui/material';
import { Settings } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../router/RoutePath.type';

export const SettingsIcon = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(RoutePath.settingsScreen);

  return (
    <Container>
      <StyledIconButton
        disableRipple
        color="enable"
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
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
