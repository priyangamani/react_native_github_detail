import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import reducers from '../reducers'

import createSagaMiddleware from 'redux-saga'
import dataSaga from '../saga'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
  whitelist: ['appData','loginReducer'],
}


const persistedReducer = persistReducer(persistConfig, reducers)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(dataSaga)
let persistor = persistStore(store)

export default function configureStore() {
  return { store, persistor }
}