// Base API configuration
import axios from "axios"

const api_url = "http://localhost:3000"

const api = axios.create({
  baseURL : api_url, 
  headers: {
    "Content-Type" : "application/json"
  },
  timeout: 10000, // 10 dtik
})


// Request interceptor

// Logging atau auth
api.interceptors.request.use (
  (config) => {
    console.log(`[API Request] ${config.method.toUpperCase()} ${config.url}`)
  
    return config
  },
  (error) => {
    console.log(`API Requested Error : ${error}`)
    return Promise.reject (error)
  }
) 

// Error Handling

api.interceptors.response.use(
  (response) => {
    console.log(`[API Response] ${response.status} ${response.config.url}`)
    return response
  },
  (error) => {
    if (error.response) {
      console.error('[API Response Error]',  error.response.status, error.response.data)
  } else if (error.request) {
    console.error('[API No Response]', error.request)
  } else {
    console.error('[API Error]'), error.message
  }
  return Promise.reject(error)
  }
)

export default api;