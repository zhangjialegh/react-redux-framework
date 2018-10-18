
import axios from './axios.js' // 导入我们封装好的axios对象
import baseURL from './ips.js'
const prefix = 'ip1'   //默认api

/******** Home ********/
// export function getSearchSuggest (params = {}, ip = prefix) {
//    return axios.get(ip+'/api/search/suggest', params)
// }

export function getCbsaRanking (params = {}, ip = prefix) {
  return axios.get(baseURL[ip]+'/api/cbsa/rankings', {params})
}

/******** Search ********/
export function postHotSearch (params = {}, ip = prefix) {
  return axios.get(baseURL[ip]+'/api/search/suggest', {params})
}

export function suggestSearch (params = {}, ip = prefix) {
  return axios.get(baseURL[ip]+'/api/search/suggest', {params})
}