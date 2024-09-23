import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
  width: 1040px;
  height: 100%;
  border-radius: 24px;
  padding: 32px 44px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  border: 1px solid ${Color.gray50};
  background-color: ${Color.white};
`;

export const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${Color.gray50};
`;

export const TextVoteContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

interface VoteNameType {
  select: boolean;
}

export const VoteArray = styled.p<VoteNameType>`
  display: flex;
  justify-content: space-between;
  padding: 12px 0px;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  cursor: pointer;
`;

export const CheckImg = styled.img`
  padding: 12px 0px;
  width: 36px;
  height: 36px;
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
