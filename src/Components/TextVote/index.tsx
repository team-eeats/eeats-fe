import * as S from "./style";
import { useEffect, useState } from "react";
import nonCheck from "../../assets/img/SVG/nonCheck.svg";
import check from "../../assets/img/SVG/check.svg";
import { Font } from "../../Styles/Font";

interface TextVoteType {
  date: string;
  header: string;
  content: string;
}

const TextVote = ({ date, header, content }: TextVoteType) => {
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
    <S.Container>
      <S.TextWrapper>
        <S.LeftTextWrapper>
          <Font text={date || "날짜"} kind="Body2" color="gray300" />
          <Font text={header || "제목"} kind="Heading2" />
          <Font text={content || "콘텐츠"} kind="label1" color="gray400" />
        </S.LeftTextWrapper>
        {!isNotVoting ? (
          <Font text="이미 참여된 투표입니다." kind="Body2" color="gray500" />
        ) : null}
      </S.TextWrapper>
      <S.Hr />
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
    </S.Container>
  );
};

export default TextVote;
