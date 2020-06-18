import React, { useCallback, useState } from 'react';
import { Box, grommet, Grommet, ResponsiveContext } from 'grommet';
import { useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import Gremlin from './Gremlin';
import Greeting from './Greeting';

export default function App() {
  const [appear, setAppear] = useState(false);

  const animation = useSpring({
    // opacity: appear ? 1 : 0,
    transform: appear ? 'translate3d(0,0,0)' : 'translate3d(0,50%,0)',
    config: config.default,
  });

  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
  const dampen = 2.75; // Lower the number the less rotation
  const onMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({
        xy: [
          (x - window.innerWidth / 2) / dampen,
          (y - window.innerHeight / 2) / dampen,
        ],
      }),
    [],
  );

  return (
    <Grommet theme={grommet} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            background="accent-4"
            onMouseMove={onMove}
            height="100vh"
            pad={{ horizontal: 'large', top: 'large' }}
            flex
            direction={size !== 'small' ? 'row' : 'column'}
            gap="medium"
          >
            <Box>
              {/* <Waypoint onEnter={() => !appear && setAppear(true)} /> */}

              <Greeting />
            </Box>
            <Box width={size !== 'small' ? '50%' : 'large'} justify="end">
              <Waypoint onEnter={() => !appear && setAppear(true)} />
              <Gremlin
                animation={animation}
                width="100%"
                st={st}
                xy={xy}
                alignSelf={size !== 'small' ? 'end' : 'center'}
              />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}
