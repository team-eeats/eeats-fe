import * as S from "./style";
import { useEffect, useState } from "react";
import nonCheck from "../../assets/img/nonCheck.svg";
import check from "../../assets/img/check.svg";
import { Font } from "../../Styles/Font";

const TextVote = () => {
  const [isSelect, setIsSelect] = useState<number>(-1);
  const [isIng, setIsIng] = useState<boolean>(false);
  const [isNotVoting, setIsNotVoting] = useState<boolean>(true);
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
    const hasPercent = voteArray.some((item) => item.percent !== undefined);
    setIsIng(hasPercent);
  }, [voteArray]);

  const handleSelect = (index: number) => {
    if (isNotVoting) {
      setIsSelect(index);
      setIsNotVoting(false);
    }
  };

  return (
    <S.TextVoteContainer>
      {voteArray?.map(({ name, percent }, index) => {
        const isSelected = isSelect === index;
        const textColor = isSelected ? "main400" : "black";
        const imgSrc = isSelected ? check : nonCheck;

        return (
          <S.VoteArray
            key={index}
            select={isSelected}
            onClick={() => handleSelect(index)}
          >
            <Font text={name} kind="Body1" color={textColor} />
            {isIng ? (
              <Font text={`${percent}%`} kind="Heading4" color={textColor} />
            ) : (
              <S.CheckImg src={imgSrc} alt="" />
            )}
          </S.VoteArray>
        );
      })}
    </S.TextVoteContainer>
  );
};

export default TextVote;
