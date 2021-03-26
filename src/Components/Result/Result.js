import React from 'react';
import {Box, Typography} from '@material-ui/core';

const Result = ({ result }) => {
  const mainContent = (
    <Box className="results">
      <Box>
        <Typography variant="body1" gutterBottom>
          Total Word Count: {result.totalWordCount}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" gutterBottom>
          Top Five Frequent Words: {result.topFiveFreq}
        </Typography>
      </Box>
    </Box>
  );

  return mainContent;
};

export default Result;
