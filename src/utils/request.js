import axios from 'axios'

const instance = axios.create({
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})
// Add a request interceptor
instance.interceptors.request.use((config) => {
  // Do something before request is sent
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

const get = (url, params) => axios.get(url, { params })
const post = (url, data) => axios.post(url, data)
const patch = (url, data) => axios.patch(url, data)

const request = { get, post, patch }
export default request

