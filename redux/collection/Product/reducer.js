import {
  SET_PRODUCT,
  TOGGLE_LOVE
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
    case TOGGLE_LOVE: {
      const newProduct = []
      for (let i = 0; i < state.data.product.length; i++) {
        const itemProduct = state.data.product[i]
        if (itemProduct.id === payload) {
          itemProduct.loved = !itemProduct.loved
        }
        newProduct.push(itemProduct)
      }
      return {
        ...state,
        data: {
          ...state.data,
          product: newProduct
        }
      }
    }
    default: {
      return state
    }
  }
}

export default setDataProduct
