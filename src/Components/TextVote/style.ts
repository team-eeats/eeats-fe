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
  color: ${({ select }) => (select ? "#FF583B" : "#000")};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  padding: 12px 0px;
  box-sizing: border-box;
  & > div {
    color: ${({ select }) => (select ? "#FF583B" : "#000")};
  }
`;

export const CheckImg = styled.img`
  padding: 12px 0px;
  width: 36px;
  height: 36px;
`;
