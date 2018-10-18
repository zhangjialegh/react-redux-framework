import { combineReducers } from 'redux-immutable'
import { home } from './home'
import { search } from './search'
import { global } from './global'
import { auth } from './auth'
const rootReducer = combineReducers({
  /* your reducers */
  search, //搜索相关
})
export default rootReducer
