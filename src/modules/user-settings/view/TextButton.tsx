import { Button, styled } from '@mui/material';
import { createButtonWidth } from '../../../libs/design-system/createValuesWithScreenSize';
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
    width: '100%',
    marginLeft: '0vw',
    textTransform: 'unset',
    fontSize: '1.1em',
  })
);
