import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
import { useStyles } from '../../styles';

const Post = ({ singlePost }) => {
  const classes = useStyles();

  const mainContent = (
    <Box className={classes.postItem}>
      <Card>
        <CardContent>
          <Box mb={3}>
            <Typography variant="h5">Title</Typography>
            <Typography variant="body1">{singlePost.title}</Typography>
          </Box>

          <Typography variant="h5">Body</Typography>
          <Typography variant="body1">{singlePost.body}</Typography>
        </CardContent>
        <CardActions>
          <Button>Delete Post</Button>
        </CardActions>
      </Card>
    </Box>
  );

  return mainContent;
};

export default Post;
