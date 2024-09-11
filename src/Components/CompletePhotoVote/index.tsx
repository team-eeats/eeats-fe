import * as S from "./styled";
import dakgalbi from "../../Assets/img/PNG/dakgalbi.jpg";
import ddeokbokki from "../../Assets/img/PNG/ddeokbokki.png";
import chobab from "../../Assets/img/PNG/chobab.png";
import malatang from "../../Assets/img/PNG/malatang.png";
import { Font } from "../../Styles/Font";
import { useEffect, useState } from "react";

export const CompletePhotoVote = () => {
  const ex = [
    { photo: ddeokbokki, name: "떡볶이", percent: 76 },
    { photo: dakgalbi, name: "닭갈비", percent: 32 },
    { photo: malatang, name: "마라탕", percent: 1 },
    { photo: chobab, name: "초밥", percent: 0 },
  ];

  // 각 퍼센트 값을 저장할 상태
  const [percentValues, setPercentValues] = useState<number[]>(ex.map(() => 0));

  // 숫자 카운트 애니메이션 함수
  const animateCount = (index: number, max: number) => {
    let current = 0;
    const stepTime = 20; // 애니메이션 속도 (ms)
    const increment = Math.ceil(max / 100); // 증가값

    const handle = setInterval(() => {
      current += increment;
      if (current >= max) {
        current = max;
        clearInterval(handle);
      }
      // 해당 index의 percent 값을 업데이트
      setPercentValues((prev) =>
        prev.map((value, i) => (i === index ? current : value))
      );
    }, stepTime);
  };

  useEffect(() => {
    ex.forEach((_, index) => {
      animateCount(index, ex[index].percent);
    });
  }, []);

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
            <S.MenuPhoto src={element.photo} />
            <S.Percent>
              <Font
                text={`${percentValues[index]}%`}
                kind="Heading2"
                color="main300"
              />
            </S.Percent>
            <Font text={element.name} kind="body3" />
          </S.VoteWrapper>
        ))}
      </S.MapWrapper>
    </S.Container>
  );
};
