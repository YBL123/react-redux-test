import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { updatePosts } from './store/actions'

//COMPONENTS
import Result from './Components/Result/Result';
import Posts from './Components/Posts/Posts';
import Error from './Components/ErrorMsg/Error';

//MATERIAL UI
import { Grid, Paper, Container, Typography, Box } from '@material-ui/core';

//MATERIAL UI STYLES
import { useStyles } from './styles';

//HELPER FUNCTIONS
import { wordCount, topFiveFreq } from './utils/utils';

function App() {

  const dispatch = useDispatch()
  

  const [data, setData] = useState([]);
  const [viewConfig, setViewConfig] = useState({
    isFetch: false,
    isReady: false,
  });
  const [result, setResult] = useState({
    totalWordCount: null,
    totalWordsArr: null,
    topFiveFreq: null,
  });

  useEffect(() => {
    const fetch = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/posts');
      dispatch(updatePosts(result.data))

      setData(result.data);
      setViewConfig({ ...viewConfig, isFetch: true });
    };
    if (!viewConfig.isFetch) {
      fetch();
    }
  }, [viewConfig]);

  useEffect(() => {
    if (viewConfig.isFetch && !viewConfig.isReady) {
      const res = wordCount(data);
      const topFive = topFiveFreq(res);

      setResult({
        ...result,
        totalWordsArr: res,
        totalWordCount: res.length,
        topFiveFreq: topFive,
      });
      setViewConfig({ ...viewConfig, isReady: true });
    }
  }, [data, viewConfig, result]);

  const classes = useStyles();

  const posts = useSelector(store => store.posts.state)


  const mainContent = (
    <>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.centreText} variant="h3" gutterBottom>
                Results
              </Typography>
              {viewConfig.isReady ? (
                <Result result={result} />
              ) : (
                <Error errTxt="Sorry, unable to Load!" />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography className={classes.centreText} variant="h3" gutterBottom>
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


