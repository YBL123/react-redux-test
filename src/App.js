import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const postWordCount = [];
  const allWords = [];

  useEffect(async () => {
    const result = await axios('https://jsonplaceholder.typicode.com/posts');

    setData(result.data);
  }, []);

  console.log('boop', data);

  for (let i = 0; i < data.length; i++) {
    //   // console.log('here', data[i]);
    //   const wordCount = data[i].title.length + data[i].body.length;

    //   console.log(wordCount);
    //   postWordCount.push(wordCount);
    //   console.log(postWordCount)
    allWords.push(data[i].title + data[i].body);
    // console.log('allWords', allWords); /// HEEERERER
  }

  // const totalWordCount = postWordCount.reduce((acc, curr) => acc + curr);
  // console.log(totalWordCount);

  // function calcWordFreq(s) {
  //   // Normalize
  //   s = s.toLowerCase();
  //   // Strip quotes and brackets
  //   s = s.replace(/["“”(\[{}\])]|\B['‘]([^'’]+)['’]/g, '$1');
  //   // Strip dashes and ellipses
  //   s = s.replace(/[‒–—―…]|--|\.\.\./g, ' ');
  //   // Strip punctuation marks
  //   s = s.replace(/[!?;:.,]\B/g, '');
  //   return s.match(/\S+/g).reduce(function(oFreq, sWord) {
  //     if (oFreq.hasOwnProperty(sWord)) ++oFreq[sWord];
  //     else oFreq[sWord] = 1;
  //     return oFreq;
  //   }, {});
  // }

  // console.log('boopdidoop', allWords.map(word => word.split(' ') ))

  const x = allWords.map((word) => word.split(' '));

  let z = x.flat();

  console.log('yoooo', z);

  for (let i = 0; i < z.length; i++) {
    z.reduce(function (acc, curr) {
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }

      return acc

      // const y = acc.filter( (item, index) => {
      //   if (index <= 2 || Object.values(item)[0] === Object.values(acc[0])[0]) {
      //     return item
      //   }
      // })

      // console.log('is this working', y)
    }, {});
  }
  // console.log('hereeererere', acc);
  // const sortedValues = Object.values(acc)
  //   .flatMap(Object.entries)
  //   .sort(([, a], [, b]) => b - a);
  // const fiveHighest = sortedValues.slice(0, 5);



  return (
    <>
    {/* <h1>Toal Word Count: {totalWordCount}</h1> */}
    </>
  )

}

export default App;

// sum of all words in all posts combined -> total word count
// counter -> top  5 most frequently used words across all posts
