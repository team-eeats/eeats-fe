import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Background = styled.div`
  background-color: rgba(0,0,0,0.2)
`

export const Container = styled.div`
  position: absolute;
  top: 40vh;
  right: 30vw;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 656px;
  height: 279px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: ${Color.white};
  padding: 28px;
  > div {
    align-self: flex-end;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
