import {
  SET_PURCHASE,
  TOGGLE_LOVE
} from '../../types'

const initialState = {
  data: []
}

const setDataPurchase = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PURCHASE: {
      return {
        ...state,
        data: [
          ...state.data,
          payload
        ]
      }
    }
    case TOGGLE_LOVE: {
      const newProduct = []
      for (let i = 0; i < state.data.length; i++) {
        const itemProduct = state.data[i]
        if (itemProduct.id === payload) {
          itemProduct.loved = !itemProduct.loved
        }
        newProduct.push(itemProduct)
      }
      return {
        ...state,
        data: newProduct
      }
    }
    default: {
      return state
    }
  }
}

export default setDataPurchase
