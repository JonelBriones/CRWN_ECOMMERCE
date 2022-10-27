import { compose, legacy_createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { rootReducer } from './rooter-reducer'

// root-reducer
const middleWares = [logger]

const composedEnchancers = compose(applyMiddleware(...middleWares))

export const store = legacy_createStore(
  rootReducer,
  undefined,
  composedEnchancers
)
