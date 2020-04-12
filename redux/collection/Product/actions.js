import {
  SET_PRODUCT,
  TOGGLE_LOVE
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
          const dataContainer = {
            category: null,
            product: null
          }
          if (data[0] !== null) {
            dataContainer.category = data[0].data.category
            dataContainer.product = data[0].data.productPromo
          }
          dispatch(setProduct({ data: dataContainer }))
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

export const toggleLove = id => ({
  type: TOGGLE_LOVE,
  payload: id
})
