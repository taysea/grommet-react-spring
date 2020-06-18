import React from 'react';
import { Box, Heading } from 'grommet';
import { animated } from 'react-spring';

const AnimatedBox = animated(Box);

const Greeting = () => {
  return (
    <AnimatedBox flex align="center" justify="center">
      <Box>
        <Heading margin="none" size="large">
          Hi there!
        </Heading>
        <Heading margin="none" size="large">
          Nice to meet you.
        </Heading>
      </Box>
    </AnimatedBox>
  );
};

export default Greeting;
