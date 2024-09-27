import styled from "styled-components";
import { Color } from "../../Styles/Color";

interface AllergyTagsType {
  select: boolean;
}

export const AllergyTags = styled.span<AllergyTagsType>`
  width: fit-content;
  height: 41px;
  padding: 10px 16px;
  background-color: ${(prop) => (prop.select ? Color.main300 : Color.gray0)};
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`;
