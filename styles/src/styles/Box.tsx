import styled, { css } from 'styled-components'

type LayoutProps = {
  display?: 'flex' | 'inline'
  width?: string | number
  height?: string | number
  padding?: string | number
  zIndex?: string | number
  position?: 'sticky' | 'absolute' | 'relative' | 'fixed'
  top?: string | number
  left?: string | number
  bottom?: string | number
  background?: string
  marginRight?: string | number
  marginLeft?: string | number
  marginBottom?: string | number
  borderRadius?: string | number
  backgroundColor?: string
  transform?: string
  cursor?: string
  border?: string
  margin?: string
}

type FontProps = {
  fontWeight?: string | number
  fontSize?: string | number
  textAlign?: string
  color?: string
}

type FlexboxProps = {
  alignItems?: 'center' | 'flex-start'
  justifyContent?: 'center'
  gap?: string | number
  flexGrow?: string | number
  gridTemplateColumns?: string
}

export type Props = LayoutProps & FontProps & FlexboxProps

export const Box = styled.div<LayoutProps & FontProps & FlexboxProps>`
  box-sizing: border-box;
  ${props => css`
    display: ${props.display};
    width: ${props.width};
    height: ${props.height};
    padding: ${props.padding};
    margin: ${props.margin};
    margin-bottom: ${props.marginBottom};
    margin-left: ${props.marginLeft};
    margin-right: ${props.marginRight};
    background: ${props.background};
    background-color: ${props.backgroundColor};
    border-radius: ${props.borderRadius};
    border: ${props.border};
    position: ${props.position};
    top: ${props.top};
    left: ${props.left};
    bottom: ${props.bottom};
    z-index: ${props.zIndex};
    text-align: ${props.textAlign};
    font-weight: ${props.fontWeight};
    font-size: ${props.fontSize};
    cursor: ${props.cursor};
    transform: ${props.transform};
    color: ${props.color};

    align-items: ${props.alignItems};
    justify-content: ${props.justifyContent};
    gap: ${props.gap};
    flex-grow: ${props.flexGrow};
    grid-template-columns: ${props.gridTemplateColumns};
  `}
`
