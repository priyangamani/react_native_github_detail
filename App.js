import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/stores';
import { PersistGate } from 'redux-persist/integration/react'
import AppContainer from "./src/index"

const { store, persistor } = configureStore();
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
     <AppContainer/>
      </PersistGate>
    </Provider>
  );
}

export default App;


