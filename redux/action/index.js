import * as UserAction from '../collection/User/actions'
import * as ProductAction from '../collection/Product/actions'
import * as PurchaseAction from '../collection/PurchaseHistory/actions'

export const ActionsCreator = Object.assign(
  UserAction,
  ProductAction,
  PurchaseAction
)
