import styled from "styled-components";
import { Color } from "../../Styles/Color";

interface ButtonContainerPropsType {
  activate: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerPropsType>`
  width: 138px;
  height: 55px;
  border-radius: 16px;
  border: none;
  background-color: ${(props) =>
    props.activate ? Color.main300 : Color.main100};
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${(props) =>
      props.activate ? Color.main500 : Color.main100};
  }
`;
