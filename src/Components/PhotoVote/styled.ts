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

export const MenuPhoto = styled.img<{ vote: boolean }>`
  position: ${({ vote }) => (vote ? "relative" : "none")};
  width: 200px;
  height: 156px;
  border-radius: 8px;
  filter: ${({ vote }) => (vote ? "brightness(50%)" : "none")};
`;

export const Photo = styled.div<{ vote: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${({ vote }) => (vote ? `4px solid ${Color.main300}` : "none")};
`;

export const Vote = styled.img<{ vote: boolean }>`
  display: ${({ vote }) => (vote ? "block" : "none")};
  position: absolute;
  transform: translate(0%, 120%);
`;
