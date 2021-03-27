import React from 'react';
import {Box, Typography} from '@material-ui/core';

//MATERIAL UI STYLES
import { useStyles } from '../../styles';

const Result = ({ result }) => {

  const classes = useStyles();

  const mainContent = (
    <Box className={classes.results}>
      <Box>
        <Typography className={classes.centreText} variant="body1" gutterBottom>
          Total Word Count: {result.totalWordCount}
        </Typography>
      </Box>
      <Box>
        <Typography className={classes.centreText}  variant="body1" gutterBottom>
          Top Five Frequent Words: {result.topFiveFreq}
        </Typography>
      </Box>
    </Box>
  );

  return mainContent;
};

export default Result;
