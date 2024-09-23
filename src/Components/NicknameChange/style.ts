import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 656px;
  height: 279px;
  border-radius: 20px;
  border: 1px solid black;
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
