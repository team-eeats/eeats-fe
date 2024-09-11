import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
  width: 380px;
  height: 311px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  background-color: ${Color.white};
  border-radius: 12px;
  border: 1px solid ${Color.gray50};
  padding: 16px 0px 16px 20px;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 90px;
    background-color: ${Color.gray300};
    border-radius: 90px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${Color.white};
  }
`;

export const Check = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 90px;
  background-color: #ff765d;
`;

export const Title = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Alarm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AlarmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
