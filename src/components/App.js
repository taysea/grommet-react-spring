import React from "react";
import { Box, grommet, Grommet, Heading, Paragraph } from "grommet";

export const App = () => (
  <Grommet theme={grommet}>
    <Box pad="small">
      <Heading level={3}>
        <strong>Hello World</strong>
      </Heading>
      <Paragraph>Woot-Woot you are running an app with Grommet v2!</Paragraph>
    </Box>
  </Grommet>
);
