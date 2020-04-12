import { combineReducers } from 'redux'
import UserReducer from '../collection/User/reducer'
import HomeReducer from '../collection/Home/reducer'
import ProductReducer from '../collection/Product/reducer'

export default combineReducers({
  userDataReducer: UserReducer,
  HomeReducer: HomeReducer,
  ProductReducer: ProductReducer
})
