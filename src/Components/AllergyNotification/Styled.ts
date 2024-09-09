import styled from "styled-components";
import {Color} from "../../Styles/Color"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 356px;
  height: 390px;
  background-color: ${Color.main0};
  border-radius: 30px;
  gap: 40px;
`

export const SubTitle = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: ${Color.gray800};
`

export const ImpactText = styled.span`
  color: ${Color.main400};
`