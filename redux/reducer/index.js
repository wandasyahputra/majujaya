import { combineReducers } from 'redux'
import UserReducer from '../collection/User/reducer'
import ProductReducer from '../collection/Product/reducer'
import PurchaseReducer from '../collection/PurchaseHistory/reducer'

export default combineReducers({
  userDataReducer: UserReducer,
  ProductReducer: ProductReducer,
  PurchaseReducer: PurchaseReducer
})
