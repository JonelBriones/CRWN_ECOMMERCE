import { all, call } from 'redux-saga/effects'
import { categoriesSaga } from './categories/category.saga'
// generator function = function*
export function* rootSaga() {
  yield all([call(categoriesSaga)])
}
