import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Post from './Post';
import {useStyles} from '../../styles'

const Posts = ({ postsArr }) => {

  const classes = useStyles()

  let posts = [];

  postsArr.forEach((post, i) => {
    posts.push(<Post key={i} singlePost={post} />);
  });

  const mainContent = <Box className={classes.postsWrapper}>{posts}</Box>;

  return mainContent;
};

export default Posts;
