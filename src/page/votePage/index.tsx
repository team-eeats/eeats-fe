import { PhotoVote } from "../../Components/PhotoVote";
import TextVote from "../../Components/TextVote";
import VoteType from "../../Components/VoteType";
import * as S from "./style";

const VotePage = () => {
  return (
    <S.VoteContainer>
      <VoteType />
      <PhotoVote />
      <TextVote />
    </S.VoteContainer>
  );
};

export default VotePage;
