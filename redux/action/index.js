import * as UserAction from '../collection/User/actions'
import * as HomeAction from '../collection/Home/actions'

export const ActionsCreator = Object.assign(
  UserAction,
  HomeAction
)
