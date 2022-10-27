import { createAction } from '../../reducers/reducer.utils'
import { CATEGORIES_ACTION_TYPES } from './category.types'
export const setCategoriesMap = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categories)
