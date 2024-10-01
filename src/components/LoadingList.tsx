import { Box, Grid } from '@/styles'
import { memo } from 'react'

type Props = {
  perPage: number
}

const LoadingListContent = ({ perPage }: Props) => Array.from(Array(perPage).keys()).map((_, i) => (
  <Grid
    key={`load_row_${i}`}
    gridTemplateColumns='3fr 1fr 2fr 138px'
    alignItems='center'
    height='56px'
  >
    {Array.from(Array(4).keys()).map((_, j) => (
      <Box
        key={`load_col_${i}_${j}`}
        padding='1rem 2rem'
        backgroundColor='#eceff5'
        borderRadius='0.6rem'
        width='75%'
      />
    ))}
  </Grid>
))

export const LoadingList = memo(LoadingListContent)
