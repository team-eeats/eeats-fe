import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const Modal = styled.div`
  width: 656px;
  display: flex;
  flex-direction: column;
  padding: 28px;
  border-radius: 20px;
  gap: 40px;
  background-color: white;
`;

export const Div = styled.div`
  align-self: flex-end;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AllergyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
