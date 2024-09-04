import * as S from "./style";
import { useState } from "react";
import nonCheck from "../../assets/img/nonCheck.svg";
import check from "../../assets/img/check.svg";

const TextVote = () => {
  const [isSelect, setIsSelect] = useState<number>();
  const [isIng, setIsIng] = useState<boolean>(false);

  const temp: { name: string; percent: number }[] = [
    { name: "국물떡볶이", percent: 33 },
    { name: "국물라볶이", percent: 33 },
    { name: "국물김말이", percent: 33 },
  ];

  const handleSelect = (index: number) => {
    setIsSelect(index);
  };

  return (
    <S.TextVoteContainer>
      {temp?.map(({ name, percent }, index) =>
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
