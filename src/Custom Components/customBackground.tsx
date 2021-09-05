import { Box, Paper } from '@material-ui/core';
import React from 'react';
export interface IBackgroundProps {
  padding?: number;
}
export const Background: React.FC<IBackgroundProps> = ({
  padding,
  ...props
}) => {
  return (
    <Box my={3}>
      <Paper>
        <Box p={padding ? padding : 3}>{props.children}</Box>
      </Paper>
    </Box>
  );
};
