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
        .then(({ data }) => {
          dispatch(setHome({ data: data }))
          dispatch(setHome(successState))
          resolve(data)
        })
        .catch((error) => {
          dispatch(setHome(errorState))
          reject(error)
        })
    })
  }
}
