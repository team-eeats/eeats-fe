import * as S from "./style";
import { useEffect, useState } from "react";
import nonCheck from "../../assets/img/SVG/nonCheck.svg";
import { Font } from "../../Styles/Font";

interface TextVoteType {
  date: string;
  header: string;
  content: string;
}

interface VoteItem {
  name: string;
  targetPercent: number;
  percent: number;
}

const TextVote = ({ date, header, content }: TextVoteType) => {
  const [isSelect, setIsSelect] = useState<number>(-1);
  const [isNotVoting, setIsNotVoting] = useState<boolean>(true);
  const [voteArray, setVoteArray] = useState<VoteItem[]>([]);

  useEffect(() => {
    setVoteArray([
      { name: "국물떡볶이", targetPercent: 57, percent: 0 },
      { name: "국물라볶이", targetPercent: 33, percent: 0 },
      { name: "국물김말이", targetPercent: 10, percent: 0 },
    ]);
  }, []);

  useEffect(() => {
    if (!isNotVoting) {
      const intervalId = setInterval(() => {
        setVoteArray((prevArray) => {
          const updatedArray = prevArray.map((item) => {
            if (item.percent < item.targetPercent) {
              return { ...item, percent: item.percent + 1 };
            }
            return item;
          });

          const allReached = updatedArray.every(
            (item) => item.percent >= item.targetPercent
          );
          if (allReached && intervalId) {
            clearInterval(intervalId);
          }

          return updatedArray;
        });
      }, 12);
      return () => clearInterval(intervalId);
    }
  }, [isNotVoting]);

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

          return (
            <S.VoteArray
              key={index}
              select={isSelected}
              onClick={() => handleSelect(index)}
            >
              <Font text={name} kind="Body1" color={textColor} />
              {!isNotVoting && (
                <Font text={`${percent}%`} kind="Heading4" color={textColor} />
              )}
              {isNotVoting && <S.CheckImg src={nonCheck} alt="" />}
            </S.VoteArray>
          );
        })}
      </S.TextVoteContainer>
    </S.Container>
  );
};

export default TextVote;
