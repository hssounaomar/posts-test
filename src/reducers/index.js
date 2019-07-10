import { combineReducers } from "redux";
import users from './users';
import posts from './posts';
import post from './post';
import comments from './comments'
const rootReducer = combineReducers({
  users,
  posts,
  post,
comments
    
});

export default rootReducer;