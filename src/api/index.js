import axios from 'axios'

const service = axios.create()

//过滤请求
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    return Promise.resolve(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)
const http = {
  async get(url, data) {
    let res = await service.get(url, {params: data});
    return res.data
  },
  async post(url, data) {
    let res = await service.post(url, data);
    return res.data
  }
}

export default http
