import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'


//ACTIONS
import { updatePosts, fetchComplete, processResult } from './store/actions'

//COMPONENTS
import Result from './Components/Result/Result';
import Posts from './Components/Posts/Posts';
import Error from './Components/ErrorMsg/Error';

//MATERIAL UI
import { Grid, Paper, Container, Typography, Box } from '@material-ui/core';

//MATERIAL UI STYLES
import { useStyles } from './styles';


function App() {

  const dispatch = useDispatch()

  const store = useSelector(state => state.store)
  const { viewConfig, posts, results } = store


  useEffect(() => {
    const fetch = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/posts');
      dispatch(updatePosts(result.data))
      dispatch(fetchComplete())

    };
    if (!viewConfig.isFetch) {
      fetch();
    }
  }, [viewConfig]);

  useEffect(() => {
    if (viewConfig.isFetch && !viewConfig.isReady) {
      dispatch(processResult())
    }
  }, [viewConfig]);

  const classes = useStyles();


  const mainContent = (
    <>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.header} variant="h3" gutterBottom>
                Results
              </Typography>
              {viewConfig.isReady ? (
                <Result result={results} />
              ) : (
                <Error errTxt="Sorry, unable to Load!" />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.header} variant="h3" gutterBottom>
                Posts
              </Typography>
              {viewConfig.isFetch ? (
                <Posts postsArr={posts} />
              ) : (
                <Error errTxt="Sorry, unable to Load posts!" />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );

  return mainContent;
}

export default App;


