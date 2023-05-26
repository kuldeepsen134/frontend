import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_ENDPOINT}`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

instance.interceptors.request.use((request) => {
  request.headers.Authorization = `${process.env.REACT_APP_TOKEN}`
  return request
})

instance.interceptors.response.use(
  (results) => {
    return results.data
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear()
      window.location.href = '/login'
    }

    return Promise.reject(error)
  },
)