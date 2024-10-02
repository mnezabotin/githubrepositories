import { useQuery } from 'react-query'
import { apiClient } from './client'
import type { Repository } from '@/types'

type Data = {
  totalCount: number
  items: Repository[]
}

const searchEndpoint = 'search/repositories'
const ownerEndpoint = 'user/repos'

export const queryKeySearchRepositories = (query: string, page: number, perPage: number) => query ? [
  searchEndpoint,
  query,
  page,
  perPage
] : [
  ownerEndpoint
]

const fetchSearchRepositories = async (query: string, page: number, perPage: number): Promise<Data> => {
  const resp = await apiClient.get(`${query ? searchEndpoint : ownerEndpoint}?page=${page}&per_page=${perPage}&q=${query}`)
  return query ? resp?.data : { items: resp?.data || [], totalCount: 0 }
}

export const useQuerySearchRepositories = (query: string, page: number, perPage: number) => useQuery({
  queryKey: queryKeySearchRepositories(query, page, perPage),
  queryFn: () => fetchSearchRepositories(query, page, perPage),
})
