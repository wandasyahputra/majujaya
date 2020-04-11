import { combineReducers } from 'redux'
import * as UserReducer from '../collection/User/reducer'

export default combineReducers(
  Object.assign(
    UserReducer
  )
)
