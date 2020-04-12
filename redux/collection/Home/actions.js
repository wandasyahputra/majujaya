import {
  SET_HOME
} from '../../types'
import axios from 'axios'
import { home } from '../../../endpoint/majujaya'
import {
  successState,
  errorState
} from '../../../utils/initState'

export const setHome = data => ({
  type: SET_HOME,
  payload: data
})

export const callHome = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios.get(home)
        .then(({ response }) => {
          const data = {
            category: null,
            product: null
          }
          if (response[0] !== null) {
            data.category = response[0].data.category
            data.product = response[0].data.productPromo
          }
          dispatch(setHome({ data }))
          dispatch(setHome(successState))
          resolve(response)
        })
        .catch((error) => {
          dispatch(setHome(errorState))
          reject(error)
        })
    })
  }
}
