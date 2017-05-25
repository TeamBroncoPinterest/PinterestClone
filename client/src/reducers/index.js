import { combineReducers } from 'redux';
// import userReducer from './userReducer';
import feedReducer from './feedReducer';

const rootReducer = combineReducers({
  // user: userReducer,
  feed: feedReducer
})

export default rootReducer;
