import styled from "styled-components";
import { Color } from "../../Styles/Color";

interface ButtonContainerPropsType {
  activate: boolean;
  available: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerPropsType>`
  width: 138px;
  height: 55px;
  border-radius: 16px;
  border: none;
  background-color: ${(props) =>
    props.available
      ? props.activate
        ? Color.main300
        : Color.main100
      : Color.main500};
  cursor: pointer;
  user-select: none;
`;
