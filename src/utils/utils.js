export const wordCount = (postsArr) => {
  let totalWordArr = [];

  for (let i = 0; i < postsArr.length; i++) {
    let titleWordsArr = postsArr[i].title.split(' ');
    let bodyWordsArr = postsArr[i].body.split(' ');

    totalWordArr.push([...titleWordsArr]);
    totalWordArr.push([...bodyWordsArr]);
  }

  return totalWordArr.flat();
};

export const topFiveFreq = (totalWordArr) => {
  let totalWordsObj = [...totalWordArr];
  totalWordsObj = totalWordsObj.reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }

    return acc;
  }, {});

  let arrObj = [];
  for (const p in totalWordsObj) {
    let temp = {
      name: p,
      freq: totalWordsObj[p],
    };
    arrObj.push(temp);
  }

  arrObj.sort((a, b) => {
    if (a.freq < b.freq) {
      return 1;
    } else {
      return -1;
    }
  });

  const fiveHighest = arrObj.slice(0, 5);
  let fiveHighestText = ''

  fiveHighest.forEach(el => {
    fiveHighestText+= `${el.name}, `
  })

  return fiveHighestText

};
