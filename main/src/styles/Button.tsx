import { Box, type Props } from '@/styles/Box'

export const Button = (props: Props & { children?: JSX.Element | string | number, onClick?: () => void }) => <Box as='button' {...props} />
