import {
  SET_PRODUCT
} from '../../types'

const initialState = {
  data: [],
  loading: false,
  loaded: false,
  error: false
}

const setDataLogin = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT: {
      return {
        ...state,
        ...payload
      }
    }
    default: {
      return state
    }
  }
}

export default setDataLogin
