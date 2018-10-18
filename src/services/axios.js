import axios from 'axios'

// axios.defaults.withCredentials = true
axios.defaults.timeout = 30000
axios.interceptors.request.use(config => {
  config.headers["Authorization"]=localStorage.getItem('token')
  return config
}, function (error) {
  console.log('request interceptor error:',error)
  // Do something with request error
  return Promise.reject(error);
})


// axios拦截器
axios.interceptors.response.use(res => {
  // 在这里你可以判断后台返回数据携带的请求码
  return res.data.data || res.data || res
}, (error)=>{
  console.log(error);
  alert('服务端错误')
})

export default axios