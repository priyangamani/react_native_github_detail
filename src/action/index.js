import { FETCHING_DATA,LOGIN_REQUEST } from '../constant'


export function fetchData(param) {
  return {
    type: FETCHING_DATA,
    payload:param
  }
}

export function loginAction(param) {
  return {
    type: LOGIN_REQUEST,
    payload:param
  }
}