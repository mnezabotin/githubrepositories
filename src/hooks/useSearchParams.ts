import { useState, useEffect } from 'react'
import {
  createSearchParams as createSearchParamsReact,
  useSearchParams as useSearchParamsReact
} from 'react-router-dom'

const QUERY_KEY = 'q'
const PAGE_KEY = 'p'
const PER_PAGE_KEY = 'pp'

const PAGE_DEFAULT = 1
const PER_PAGE_DEFAULT = 25

export const createSearchParams = (
  query: string,
  page = PAGE_DEFAULT,
  perPage = PER_PAGE_DEFAULT,
): string => createSearchParamsReact({
    q: query,
    p: page.toString(),
    pp: perPage.toString(),
  }).toString()

export const useSearchParams = (): {
  query: string
  page: number
  perPage: number
  setParams: (
    query?: string,
    page?: number,
    perPage?: number,
  ) => void
} => {
  const [searchParams, setSearchParams] = useSearchParamsReact()

  const [query, setQuery] = useState(searchParams.get(QUERY_KEY) || '')
  const [page, setPage] = useState(Number(searchParams.get(PAGE_KEY) || PAGE_DEFAULT))
  const [perPage, setPerPage] = useState(Number(searchParams.get(PER_PAGE_KEY) || PER_PAGE_DEFAULT))

  useEffect(() => {
    setQuery(searchParams.get(QUERY_KEY) || '')
    setPage(Number(searchParams.get(PAGE_KEY) || PAGE_DEFAULT))
    setPerPage(Number(searchParams.get(PER_PAGE_KEY) || PER_PAGE_DEFAULT))
  }, [searchParams])

  const setParams = (
    query = '',
    page = PAGE_DEFAULT,
    pp?: number,
  ) => setSearchParams({
    [QUERY_KEY]: query,
    [PAGE_KEY]: page.toString(),
    [PER_PAGE_KEY]: (pp || perPage).toString(),
  })

  return {
    query,
    page,
    perPage,
    setParams,
  }
}
