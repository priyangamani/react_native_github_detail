import { combineReducers } from 'redux'
import appData from './getGithubProfileList'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
    appData,
    loginReducer
})

export default rootReducer