import styled from "styled-components";
import { Color } from "../../Styles/Color"

interface ContentProps {
  selected?: boolean
}

export const Content = styled.div<ContentProps>`
width: 200px;
display: flex;
padding: 12px 20px;
gap: 20px;
border-radius: 8px;
background-color: ${({selected}) => selected ? Color.main300 : Color.gray50};
`

export const NavigationWrap = styled.div`
display: inline-block;
flex-direction: column;
padding: 36px 20px;
border-radius: 0 20px 20px 0;
background-color: ${Color.gray50};
`

export const Line = styled.div<ContentProps>`
width: 32px;
height: 2px;
background-color: ${({selected}) => selected ? Color.main300 : Color.gray100};
`

export const LineWrap = styled.div`
display: inline-block;
flex-direction: column;
gap: 12px;
`