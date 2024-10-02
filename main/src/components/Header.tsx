import { Box, Grid, Img, Span } from '@/styles'
import { Search } from '@/components/Search'
import githubImg from '@/assets/github-mark.svg'

type Props = {
  searchValue?: string
  onSearch?: (value: string) => void
}

export const Header = ({
  searchValue,
  onSearch,
}: Props) => (
  <Grid
    as='header'
    gridTemplateColumns='1.8rem auto 200px'
    gap='0.5rem'
    alignItems='center'
    padding='1rem 2rem'
    zIndex={100}
    position='sticky'
    top={0}
    background='#fff'
    height='64px'
  >
    <Img
      width='1.8rem'
      src={githubImg}
      alt='github-mark'
    />
    <Span
      fontSize='1.2rem'
      fontWeight={900}
    >
      {document.title}
    </Span>
    {onSearch && (
      <Box marginLeft='auto'>
        <Search
          initValue={searchValue}
          onSearch={onSearch}
        />
      </Box>
    )}
  </Grid>
)
