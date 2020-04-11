import {
  SET_PRODUCT
} from '../../types'
import axios from 'axios'
import { home } from '../../../endpoint/majujaya'
import {
  successState,
  errorState
} from '../../../utils/initState'

export const setProduct = data => ({
  type: SET_PRODUCT,
  payload: data
})

export const callProduct = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios.get(home)
        .then(({ data }) => {
          dispatch(setProduct({ data: data }))
          dispatch(setProduct(successState))
          resolve(data)
        })
        .catch((error) => {
          dispatch(setProduct(errorState))
          reject(error)
        })
    })
  }
}
