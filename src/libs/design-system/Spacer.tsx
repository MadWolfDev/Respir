import { Box } from '@mui/material';

const screenHeight = window.innerHeight;
const SCREEN_HEIGHT_REF = 568; //Screen height of iPhone 5

type MarginProps = {
  direction?: 'HORIZONTAL' | 'VERTICAL';
  spacingFactorFixed?: boolean;
  spacingFactor: number;
};

const computeMuiSpacingDirection = (direction?: 'HORIZONTAL' | 'VERTICAL') => {
  if (direction === 'HORIZONTAL') return 'mx';
  if (direction === 'VERTICAL') return 'my';
  return 'm';
};

const calculateVerticalSpacingFactorWithScreenSize = (
  marginProps: MarginProps
) => {
  if (marginProps.spacingFactorFixed || marginProps.direction !== 'VERTICAL')
    return marginProps.spacingFactor;

  return (
    marginProps.spacingFactor +
    Math.floor((screenHeight - SCREEN_HEIGHT_REF) / 100)
  );
};

export const Spacer = (marginProps: MarginProps) => {
  const muiSpacing = computeMuiSpacingDirection(marginProps.direction);
  const finalSpacingFactor =
    calculateVerticalSpacingFactorWithScreenSize(marginProps);

  return (
    <Box
      sx={{
        [muiSpacing]: finalSpacingFactor,
      }}
    />
  );
};
