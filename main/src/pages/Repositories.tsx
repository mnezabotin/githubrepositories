import { Header, List, Pagination } from '@/components'
import { useQuerySearchRepositories } from '@/queries';
import { useSearchParams } from '@/hooks'
import { useEffect, useState } from 'react';

export const Repositories = (): JSX.Element => {
  const { query, page, perPage, setParams } = useSearchParams()
  const { data, isFetching } = useQuerySearchRepositories(query, page, perPage)
  const [total, setTotal] = useState(0)

  const onSearch = (value: string) => setParams(value, value === query ? page : 1)
  const onPage = (value: number) => setParams(query, value)

  useEffect(() => {
    if (!isFetching) {
      setTotal(data?.totalCount || 0)
    }
  }, [data?.totalCount, isFetching])

  return (
    <>
      <Header
        searchValue={query}
        onSearch={onSearch}
      />
      <List repositories={data?.items || []} perPage={perPage} loading={isFetching} />
      <Pagination
        page={page}
        total={total}
        perPage={perPage}
        onChange={onPage}
        loading={isFetching}
      />
    </>
  )
}
