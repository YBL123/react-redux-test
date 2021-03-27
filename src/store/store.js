import { configureStore } from '@reduxjs/toolkit';

import postReducer from './reducers/postReducer'

const store = configureStore({reducer: {
  store: postReducer
}})


export default store
