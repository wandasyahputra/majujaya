import * as UserAction from '../collection/User/actions'
import * as ProductAction from '../collection/Product/actions'

export const ActionsCreator = Object.assign(
  UserAction,
  ProductAction
)
