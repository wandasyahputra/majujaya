import {
  SET_HOME
} from '../../types'

const initialState = {
  data: [],
  loading: false,
  loaded: false,
  error: false
}

const setDataHome = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HOME: {
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

export default setDataHome
