// action是一个纯对象，不要觉得它是一个函数，要看return回来的其实就是一个object
import { postHotSearch } from 'services'

const receiveSearch = (payload) => ({
  type: 'RECEIVE_HOT_SEARCH',
  payload
})

const updateSearch = (payload) => ({
  type: 'UPDATE_SEARCH',
  payload
})

//获取服务器的参数，并且返回一个异步的dispatch，dispatch的对象是自己定义的action
export const receiveHotSearch = (payload) => async dispatch => {
  let res = await postHotSearch({
    text: payload
  })
  await dispatch(receiveSearch(payload))
  await dispatch(updateSearch(res.data))
}
