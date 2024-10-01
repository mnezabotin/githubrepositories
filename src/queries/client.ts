import { QueryClient } from 'react-query'
import axios, { type AxiosResponse } from 'axios'
import { camelizeKeys } from 'humps'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

apiClient.interceptors.request.use(
  config => {
    const t = import.meta.env.VITE_API_TOKEN
    if (t) {
      config.headers.authorization = `Bearer ${t}`
    }
    return config
  }
)

apiClient.interceptors.response.use((response: AxiosResponse) => {
  if (response.data) {
    response.data = camelizeKeys(response.data)
  }

  return response
})

export { apiClient }

export default new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
      retryOnMount: false
    },
  },
})
