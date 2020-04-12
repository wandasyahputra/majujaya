import {
  SET_PRODUCT
} from '../../types'

const initialState = {
  data: {
    category: null,
    product: null
  },
  loading: false,
  loaded: false,
  error: false
}

const setDataProduct = (state = initialState, { type, payload }) => {
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

export default setDataProduct
