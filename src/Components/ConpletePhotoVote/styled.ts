import { styled } from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
  width: 1040px;
  height: 100%;
  border-radius: 24px;
  padding: 32px 44px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  border: 1px solid ${Color.gray50};
  background-color: ${Color.white};
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MapWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

export const MenuPhoto = styled.img`
  width: 200px;
  height: 156px;
  border-radius: 12px;
  filter: brightness(50%);
`;

export const Percent = styled.div`
  display: block;
  position: absolute;
  transform: translate(0%, 120%);
`;
