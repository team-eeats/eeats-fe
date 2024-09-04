import * as S from "./style";
import { useEffect, useState } from "react";
import nonCheck from "../../assets/img/nonCheck.svg";
import check from "../../assets/img/check.svg";

const TextVote = () => {
  const [isSelect, setIsSelect] = useState<number>(-1);
  const [isIng, setIsIng] = useState<boolean>(false);
  const [voteArray, setVoteArray] = useState<
    { name: string; percent?: number }[]
  >([]);

  useEffect(() => {
    setVoteArray([
      { name: "국물떡볶이", percent: 33 },
      { name: "국물라볶이", percent: 33 },
      { name: "국물김말이", percent: 33 },
    ]);
  }, []);

  useEffect(() => {
    if (voteArray.length > 0 && voteArray[0].percent !== undefined) {
      setIsIng(true);
    }
  }, [voteArray]);

  const handleSelect = (index: number) => {
    setIsSelect(index);
  };

  return (
    <S.TextVoteContainer>
      {voteArray?.map(({ name, percent }, index) =>
        isSelect === index ? (
          <S.VoteArray
            key={index}
            select={true}
            onClick={() => handleSelect(index)}
          >
            {name}
            {isIng ? <div>{percent}%</div> : <S.CheckImg src={check} alt="" />}
          </S.VoteArray>
        ) : (
          <S.VoteArray
            key={index}
            select={false}
            onClick={() => handleSelect(index)}
          >
            {name}
            {isIng ? (
              <div>{percent}%</div>
            ) : (
              <S.CheckImg src={nonCheck} alt="" />
            )}
          </S.VoteArray>
        )
      )}
    </S.TextVoteContainer>
  );
};

export default TextVote;
