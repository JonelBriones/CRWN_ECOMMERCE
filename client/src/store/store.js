import { compose, legacy_createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import { loggerMiddleware } from './middleware/logger'
// USE ONE FOR ASYNCRHOUNOUS REDUX
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'

import { rootReducer } from './rooter-reducer'

// root-reducer

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['user'],
  whitelist: ['cart'],
}
//  ROOT SAGA MIDDLEWRE
const sagaMiddleWare = createSagaMiddleware()

// KEEP LOCAL STATE IN SESSION
const persistedReducer = persistReducer(persistConfig, rootReducer)

// DEVTOOLS FOR REDUX
const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleWare,
  // thunk,
].filter(Boolean)

const composedEnchancers = compose(applyMiddleware(...middleWares))

export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnchancers
)
sagaMiddleWare.run(rootSaga)
export const persistor = persistStore(store)
