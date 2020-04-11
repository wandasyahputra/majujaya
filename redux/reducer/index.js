import { combineReducers } from 'redux'
import UserReducer from '../collection/User/reducer'

export default combineReducers({
  userDataReducer: UserReducer
})
