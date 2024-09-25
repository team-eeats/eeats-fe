import styled from "styled-components";
import { Color } from "../../Styles/Color";

interface AllergyTagsType {
  select: boolean;
}

export const AllergyTags = styled.div<AllergyTagsType>`
  height: 41px;
  padding: 10px 16px;
  background-color: ${(prop) => (prop.select ? Color.main300 : Color.gray0)};
  border-radius: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`;
