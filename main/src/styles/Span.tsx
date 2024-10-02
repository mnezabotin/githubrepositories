import { Box, type Props } from '@/styles/Box'

export const Span = (props: Props & { children?: JSX.Element | string | number, onClick?: () => void }) => <Box as='span' {...props} />
