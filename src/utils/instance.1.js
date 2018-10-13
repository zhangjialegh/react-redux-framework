import axios from 'axios'
const  BASE_URL = process.env.NODE_ENV === 'production'
? 'https://www.easy-mock.com/mock/593611b991470c0ac101d474'
: false //设置默认api路径

axios.create({
  timeout: 5000 //设置超时时间
})

const instance = {
  post: function (requestSurfix, params, callbacks) {
    return this.request('POST', requestSurfix, params, callbacks)
  },

  get: function (requestSurfix, params, callbacks) {
    return this.request('GET', requestSurfix, params, callbacks)
  },

  all: function (requestSurfix, callbacks) {
    return axios.all(requestSurfix).then(axios.spread((...res) => {
      if (callbacks && callbacks.success) {
        callbacks.success(...res)
      }
    })).catch((errorResponse) => {
      if (callbacks && callbacks.error) {
        callbacks.error(errorResponse)
      }
    })
  },

  request: function (requestMethod, requestSurfix, params, callbacks) {
    const token = (params && params.token) || null
    /**
     * 判断是否访问第三方接口数据(非BASE_URL下的接口)，如果是一个完成的地址接口(包含http/https),就当做第三方接口
     */
    const thirdApi = requestSurfix.indexOf('http') !== -1
    /************************************************************************/
    let config = {
      method: requestMethod,
      url: thirdApi ? requestSurfix : BASE_URL + requestSurfix,
      data: params,
      headers: {
        'Authorization': token || localStorage.getItem('token'),
        'lng': localStorage.getItem('lng')
      }
    }
    if (requestMethod === 'GET') {
      config = {
        method: requestMethod,
        url: thirdApi ? requestSurfix : BASE_URL + requestSurfix,
        params,
        headers: {
          'Authorization': token || store.state.auth.accessToken,
          'lng': localStorage.getItem('lng')
        }
      }
    }

    if(callbacks) {
      return axios(config)
      .then((response) => {
        if (callbacks.success) {
          callbacks.success(response)
        }
      }).catch((errorResponse) => {
        if (callbacks.error) {
          callbacks.error(errorResponse)
        }
      }).then((response) => {
        // always executed
        if (callbacks.always) {
          callbacks.always(response)
        }
      })
    } else {
      return axios(config)
    }
    // handle options: loadingProgressEnabled, loadingMaskEnabled
  }
}

export default instance
