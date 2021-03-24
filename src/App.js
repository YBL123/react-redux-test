import './App.css';
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import { wordCount, topFiveFreq } from './utils/utils';

function App() {
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
      const topFive = topFiveFreq(res)
      
      setResult({ ...result, totalWordsArr: res, totalWordCount: res.length, topFiveFreq: topFive });
      setViewConfig({...viewConfig, isReady: true})
    }
  }, [data, viewConfig, result]);


  const mainContent = (
    <>
      {viewConfig.isReady ? (
        <div className="results">
          <div>
            <h1>Total Word Count: {result.totalWordCount}</h1>
          </div>
          <div>
            <h1>Top Five Frequent Words: {result.topFiveFreq}</h1>
          </div>
        </div>
      ) : null}
    </>
  );

  return mainContent;
}

export default App;

// sum of all words in all posts combined -> total word count
// counter -> top  5 most frequently used words across all posts
