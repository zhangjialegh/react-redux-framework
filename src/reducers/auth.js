// 初始化状态
let initialState = {
  isLogined: false,
  userName: '',
  userId: '',
  avatar: ''
}

export function auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_IN':
      return {
        ...state, //三个点是展开符
        ...action.payload
      }
    case 'LOGIN_OUT':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
