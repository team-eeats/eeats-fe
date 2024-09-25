import styled from "styled-components";
import { Color } from "../../Styles/Color";

interface BtnProps {
  isSelected: boolean;
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: auto;
`;

export const Btn = styled.button<BtnProps>`
  line-height: 21px;
  height: 130px;
  color: ${({ isSelected }) => (isSelected ? Color.white : Color.gray600)};
  background-color: ${({ isSelected }) => (isSelected ? Color.main300 : Color.white)};
  border: none;
  border-radius: 30px;
  cursor: pointer;
`