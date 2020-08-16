import {LOGIN_REQUEST} from '../constant'


const initialState = {
 isLoggedin:false,
}

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedin: true,
      }
    default:
      return state
  }
}