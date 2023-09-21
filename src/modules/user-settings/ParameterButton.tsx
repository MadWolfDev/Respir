import { styled } from '@mui/material';
import parameterIcon from '../../data/images/Parameter-Icon.png';
import { motion } from 'framer-motion';

export const ParameterButton = () => {
  return <Icon onClick={() => console.log('meh')} whileTap={{ scale: 0.7 }} />;
};

const Icon = styled(motion.div)({
  backgroundImage: `url(${parameterIcon})`,
  width: '17.5%',
  height: '10%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  alignSelf: 'end',
});
