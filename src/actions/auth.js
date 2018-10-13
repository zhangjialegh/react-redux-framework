// action是一个纯对象，不要觉得它是一个函数，要看return回来的其实就是一个object
export const logIn = (data) => ({
  type: 'LOGIN_IN',
  payload: data
})
export const logOut = (data) => ({
  type: 'LOGIN_OUT',
  payload: data
})
