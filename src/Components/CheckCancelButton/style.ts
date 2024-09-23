import styled from "styled-components"
import { Color } from "../../Styles/Color"

export const ButtonWrap = styled.div`
display: flex;
gap: 20px;
`

export const CancelButton = styled.button`
padding: 18px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  background-color: ${Color.gray200};
  cursor: pointer;
  user-select: none;
`

export const CheckButton = styled.button`
  padding: 18px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  background-color: ${Color.main300};
  cursor: pointer;
  user-select: none;
`