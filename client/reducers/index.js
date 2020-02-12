import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import characters from './characters'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  characters
})
