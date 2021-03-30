import React from 'react';

//MATERIAL UI
import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { useStyles } from '../../styles';
import { useDispatch } from 'react-redux';

//ACTIONS
import { deletePost, processResult } from '../../store/actions';

const Post = ({ singlePost }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const deleteP = (id) => {
    dispatch(deletePost(id));
    // dispatch(processResult());
  };

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
          <Button
            onClick={(e) => deleteP(singlePost.id)}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Delete Post
          </Button>
        </CardActions>
      </Card>
    </Box>
  );

  return mainContent;
};

export default Post;
