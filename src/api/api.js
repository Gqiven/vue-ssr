import http from './index.js'

const getList = (params) => {
  return http.get('http://localhost:3000/api/list', params)
}


export {
  getList
}