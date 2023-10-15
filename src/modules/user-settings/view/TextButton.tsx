import { Button, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const TextButton = ({
  buttonText,
  isEnable,
  handleClick,
}: {
  buttonText: string;
  isEnable: boolean;
  handleClick: () => void;
}) => {
  return (
    <StyledButton
      sx={{
        '&.MuiButtonBase-root:hover': {
          bgcolor: 'transparent',
        },
      }}
      size="small"
      color={isEnable ? 'enable' : 'disable'}
      disableRipple
      whileTap={{ scale: 1.2 }}
      onClick={handleClick}
    >
      {buttonText}
    </StyledButton>
  );
};

const StyledButton = motion(
  styled(Button)({
    alignSelf: 'center',
    width: '80%',
    textTransform: 'unset',
    fontSize: '1.1em',
  })
);
