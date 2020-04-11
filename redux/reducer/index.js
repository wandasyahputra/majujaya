import { combineReducers } from 'redux'
import UserReducer from '../collection/User/reducer'
import ProductReducer from '../collection/Product/reducer'

export default combineReducers({
  userDataReducer: UserReducer,
  productReducer: ProductReducer
})
