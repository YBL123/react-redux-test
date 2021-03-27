//HELPER FUNCTIONS
import { wordCount, topFiveFreq } from '../../utils/utils';

const initialState = {
  posts: [],
  results: {
    totalWordCount: null,
    totalWordsArr: null,
    topFiveFreq: null,
  },
  viewConfig: {
    isFetch: false,
    isReady: false,
    isError: false,
    errMsg: null
  },
};

const postReducer = (state = initialState, action) => {
  if (action.type === 'posts/update') {
    return {
      ...state,
      posts: action.payload,
    };
  }
  if (action.type === 'posts/deleteSingle') {
    let newState = state.posts.filter((post) => post.id !== action.payload); //id matches id?
    return {
      ...state,
      posts: newState,
    };
  }
  if (action.type === 'posts/fetched') {
    const { viewConfig } = state;
    const viewConfigTemp = { ...viewConfig, isFetch: action.payload };

    return {
      ...state,
      viewConfig: viewConfigTemp,
    };
  }
  if (action.type === 'posts/processResult') {
    const { viewConfig, posts } = state;
    const viewConfigTemp = { ...viewConfig, isReady: true };

    const totalWordsArr = wordCount(posts);
    const topFive = topFiveFreq(totalWordsArr);
    const totalWordCount = totalWordsArr.length;

    const resultTemp = {
      totalWordsArr, // = to totalWordsArr above
      topFiveFreq: topFive,
      totalWordCount,
    };

    return {
      ...state,
      results: resultTemp,
      viewConfig: viewConfigTemp
    };
  }
  if (action.type === 'posts/isError') {
    const { viewConfig } = state;
    const viewConfigTemp = { ...viewConfig, isError: true, errMsg: action.payload};

    return {
      ...state, 
      viewConfig: viewConfigTemp
    }
  }

  return state;
};

export default postReducer;
