import { useMemo } from 'react'
import { Flex, Button } from '@/styles'

type Props = {
  page: number;
  perPage: number;
  total: number;
  loading?: boolean;
  onChange: (num: number) => void;
}

export const Pagination = ({
  page,
  perPage,
  total = 0,
  loading,
  onChange,
}: Props): JSX.Element | null => {
  const pages = useMemo((): JSX.Element[] => {
    const max = Math.ceil(total / perPage)
    const result = []
    let leftSide = page - 3
    let rightSide = page + 3

    if (leftSide < 1) {
      rightSide += Math.abs(1 - leftSide)
      leftSide = 1
    }

    if (rightSide > max) {
      leftSide -= Math.abs(max - rightSide)
      rightSide = max
    }

    for (let num = Math.max(leftSide, 1); num <= Math.min(rightSide, max); num++) {
      result.push(
        <Button
          key={`pag_btn_${num}`}
          display='flex'
          padding='0'
          alignItems='center'
          justifyContent='center'
          width='32px'
          height='32px'
          backgroundColor={page === num ? '#5a8dee' : 'transparent'}
          color={page === num ? '#fff' : '#5a8dee'}
          border='none'
          cursor={loading ? 'no-drop' : 'pointer'}
          borderRadius='0.3rem'
          onClick={() => !loading && onChange(num)}
        >
          {num}
        </Button>,
      );
    }

    return result
  }, [total, perPage, page, loading]);

  const onPrev = (): void => {
    if (loading) return
    const result = page - 1
    onChange(result < 1 ? 1 : result)
  }

  const onNext = (): void => {
    if (loading) return
    onChange(page + 1)
  }

  if (total === 0) {
    return null
  }

  return (
    <Flex
      alignItems='center'
      width='fit-content'
      bottom='2rem'
      gap='8px'
      position='fixed'
      left='50%'
      transform='translateX(-50%)'
    >
      <Button
        display='flex'
        padding='0'
        alignItems='center'
        justifyContent='center'
        width='32px'
        height='32px'
        backgroundColor='transparent'
        color='#5a8dee'
        border='none'
        cursor={loading ? 'no-drop' : 'pointer'}
        onClick={onPrev}
      >
        &#10094;
      </Button>
      {pages}
      <Button
        display='flex'
        padding='0'
        alignItems='center'
        justifyContent='center'
        width='32px'
        height='32px'
        backgroundColor='transparent'
        color='#5a8dee'
        border='none'
        cursor={loading ? 'no-drop' : 'pointer'}
        onClick={onNext}
      >
        &#10095;
      </Button>
    </Flex>
  );
}
