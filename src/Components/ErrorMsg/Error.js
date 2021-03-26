import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Error = ({ errTxt }) => {
  const mainContent = (
    <Box>
      <Typography variant="subtitle1" color="error" gutterBottom>
        {errTxt}
      </Typography>
    </Box>
  );

  return mainContent;
};

export default Error;
