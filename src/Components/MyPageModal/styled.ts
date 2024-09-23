import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
  width: 380px;
  height: 370px;
  background-color: ${Color.white};
  border-radius: 12px;
  border: 1px solid ${Color.gray50};
  padding: 24px 20px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 8px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
`;

export const Line = styled.div`
  width: 380px;
  height: 1px;
  background-color: ${Color.gray50};
  margin-left: -20px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0px;
  gap: 10px;
`;

export const List = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 0px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
