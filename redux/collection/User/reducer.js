import {
  SET_LOGIN
} from '../../types'

const initialState = {
  data: {}
}

const setDataLogin = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN: {
      return {
        ...state,
        data: payload
      }
    }
    default: {
      return state
    }
  }
}

export default setDataLogin
