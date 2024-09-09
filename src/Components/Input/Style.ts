import styled from "styled-components";
import {Color} from "../../Styles/Color"

export const Container = styled.div`
  position: relative;
`;

export const Eyes = styled.img`
  position: absolute;
  top: 1.5vh;
  left: 29vw;
`

export const Input = styled.input`
  font-size: 18px;
  width: 600px;
  height: 56px;
  border: none;
  border-radius: 12px;
  background-color: ${Color.gray0};
  padding: 24px 16px;
  line-height: 21px;
  &:focus {
    outline: none;
    border: 1px solid ${Color.main300};
    caret-color: ${Color.main300}
  }
`;