import styled from "styled-components";
import { Color } from "../../Styles/Color";

interface AllergyTagsType {
  select: boolean;
}

export const AllergyTags = styled.div<AllergyTagsType>`
  width: 79px;
  height: 41px;
  background-color: ${(prop) => (prop.select ? Color.main300 : Color.gray0)};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
