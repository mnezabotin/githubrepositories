import { Box, type Props } from '@/styles/Box'

export const Img = (props: Props & { children?: JSX.Element | string | number, onClick?: () => void, src: string, alt: string }) => <Box as='img' {...props} />
