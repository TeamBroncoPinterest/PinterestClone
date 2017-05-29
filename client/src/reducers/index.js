import { combineReducers } from 'redux';
import userReducer from './userReducer';
import feedReducer from './feedReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: userReducer,
  feed: feedReducer,
  form: formReducer
})

export default rootReducer;
