import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import persistedReducer from '../reducers';

import { requestApiSaga } from '../globals/requestApi';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = composeWithDevTools({
    name: 'mlife',
    realtime: true
  });
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  sagaMiddleware.run(requestApiSaga);
  // Apply all sagas here

  return { store, persistor };
}
