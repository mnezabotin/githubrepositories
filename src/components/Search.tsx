import { Input } from '@/styles'
import { useState, useEffect } from 'react'
import { useDebounce } from '@/hooks'

type Props = {
  initValue?: string
  onSearch: (value: string) => void
}

export const Search = ({
  initValue,
  onSearch,
}: Props): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState(initValue || '')
  const debouncedSearch = useDebounce(searchTerm)

  useEffect(() => onSearch(debouncedSearch), [debouncedSearch])

  return (
    <Input
      placeholder='Поиск'
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  )
}
