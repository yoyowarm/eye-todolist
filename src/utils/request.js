import axios from 'axios'

function createInstance(baseURL, opts = {}) {
  const request = axios.create({
    baseURL: baseURL,
    ...opts
  })

  return request
}
const request = createInstance(process.env.VUE_APP_API_URL, {
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

export default request