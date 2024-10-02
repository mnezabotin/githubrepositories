import { Box, Flex, Span, Img, Grid } from '@/styles'
import type { Repository } from '@/types'

import gitImg from '@/assets/git.svg'
import { LoadingList } from 'styles/LoadingList'

console.log(LoadingList)

type Props = {
  repositories: Repository[]
  loading: boolean
  perPage: number
}

export const List = ({ repositories = [], loading, perPage }: Props): JSX.Element => (
  <Box marginBottom='10rem' flexGrow='1'>
    <Grid
      gridTemplateColumns='3fr 1fr 2fr 138px'
      padding='1rem 2rem'
      borderRadius='1rem'
      color='#fff'
      font-size='0.75rem'
      backgroundColor='#5a8dee'
      padding-top='0.8rem'
      padding-bottom='0.8rem'
      margin-bottom='0.8rem'
      position='sticky'
      fontWeight='700'
      top='64px'
      z-index='100'
    >
      <Box>Название репозитория</Box>
      <Box>Кол-во звёзд</Box>
      <Box textAlign='center'>Дата последнего коммита</Box>
    </Grid>
    {loading ? <LoadingList /> : repositories.map((r) => (
      <Grid
        key={r.id}
        gridTemplateColumns='3fr 1fr 2fr 138px'
        padding='1rem 2rem'
        borderRadius='1rem'
        backgroundColor='transparent'
        alignItems='center'
      >
        <Box fontWeight={500}>
          {r.fullName}
        </Box>
        <Flex alignItems='center'>
          <Box
            color='#fece00'
            width='1.2rem'
            marginRight='0.4rem'
          >
            ★
          </Box>
          <Span fontWeight={500}>
            {r.stargazersCount?.toLocaleString() || 0}
          </Span>
        </Flex>
        <Flex
          alignItems='center'
          justifyContent='center'
          fontWeight={400}
        >
          <Img
            width='0.7rem'
            marginRight='0.4rem'
            src={gitImg}
            alt='git'
          />
          <Span>{r.updatedAt ? new Date(r.updatedAt).toLocaleDateString() : '-'}</Span>
        </Flex>
        <Box>
          <a
            href={r.htmlUrl}
            target='_blank'
          >
            открыть на Github
          </a>
        </Box>
      </Grid>
    ))}
  </Box>
)
