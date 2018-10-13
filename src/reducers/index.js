import { combineReducers } from 'redux-immutable'
import { home } from './home'
import { search } from './search'
import { global } from './global'
import { auth } from './auth'
const rootReducer = combineReducers({
  /* your reducers */
  home, //首页相关
  search, //搜索相关
  global,
  auth
})
export default rootReducer
