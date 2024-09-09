import styled from "styled-components";

export const TextVoteContainer = styled.div`
  width: 100%;
  height: 60px;
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
  cursor: pointer;
`;

export const CheckImg = styled.img`
  padding: 12px 0px;
  width: 36px;
  height: 36px;
`;
