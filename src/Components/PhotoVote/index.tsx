import * as S from "./styled";
import dakgalbi from "../../Assets/img/PNG/dakgalbi.jpg";
import ddeokbokki from "../../Assets/img/PNG/ddeokbokki.png";
import chobab from "../../Assets/img/PNG/chobab.png";
import malatang from "../../Assets/img/PNG/malatang.png";
import VoteComplete from "../../Assets/img/SVG/VoteComplete.svg";
import { Font } from "../../Styles/Font";
import { useState } from "react";

export const PhotoVote = () => {
  const ex = [
    { photo: ddeokbokki, name: "떡볶이" },
    { photo: dakgalbi, name: "닭갈비" },
    { photo: malatang, name: "마라탕" },
    { photo: chobab, name: "초밥" },
  ];
  const [vote, setVote] = useState<number | null>(null);

  const ClickVote = (index: number) => {
    setVote(index);
  };

  return (
    <S.Container>
      <S.TextWrapper>
        <S.LeftTextWrapper>
          <Font text="8월 28일 ~ 8월 31일" kind="Body2" color="gray300" />
          <Font text="이번주 가장 맛있었던 메뉴는?" kind="Heading2" />
          <Font
            text="다음달 메뉴에 반영하려고 합니다!"
            kind="label1"
            color="gray400"
          />
        </S.LeftTextWrapper>
        <Font text="이미 참여된 투표입니다." kind="Body2" color="gray500" />
      </S.TextWrapper>
      <S.MapWrapper>
        {ex.map((element, index) => (
          <S.VoteWrapper key={index}>
            <S.Photo vote={vote === index}>
              <S.MenuPhoto
                src={element.photo}
                vote={vote === index}
                onClick={() => ClickVote(index)}
              />
            </S.Photo>
            <S.Vote
              src={VoteComplete}
              vote={vote === index}
              onClick={() => ClickVote(index)}
            />
            <Font text={element.name} kind="bady3" />
          </S.VoteWrapper>
        ))}
      </S.MapWrapper>
    </S.Container>
  );
};
