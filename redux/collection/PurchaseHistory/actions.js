import {
  SET_PURCHASE,
  TOGGLE_LOVE
} from '../../types'

export const setPurchase = data => ({
  type: SET_PURCHASE,
  payload: data
})

export const toggleLove = id => ({
  type: TOGGLE_LOVE,
  payload: id
})
