import { Font } from "../../Styles/Font";
import * as S from "./styled";
import Notice from "../../Assets/img/SVG/Notice.svg";
import Medicine from "../../Assets/img/SVG/Medicine.svg";
import Suggest from "../../Assets/img/SVG/suggest.svg";
import Logout from "../../Assets/img/SVG/Logout.svg";
import { MyAllergy } from "../MyAllergy";

export const MyPageModal = () => {
  const List = [
    { icon: Notice, title: "공지사항" },
    { icon: Medicine, title: "내가 갖고 있는 알레르기 변경" },
    { icon: Suggest, title: "내가 쓴 건의 보기" },
  ];
  return (
    <S.Container>
      <S.TopWrapper>
        <S.TextWrapper>
          <Font text="워는지 섹시걸" kind="Body2" />
          <Font text="수정하기" kind="Body4" color="gray300" />
        </S.TextWrapper>
        <S.Tags>
          <MyAllergy food="고등어" />
          <MyAllergy food="게" />
        </S.Tags>
      </S.TopWrapper>
      <S.Line></S.Line>
      <S.ListWrapper>
        {List.map((element, index) => (
          <S.List key={index}>
            <S.Icon src={element.icon} />
            <Font text={element.title} />
          </S.List>
        ))}
      </S.ListWrapper>
      <S.Line></S.Line>
      <S.List>
        <S.Icon src={Logout} />
        <Font text="로그아웃" />
      </S.List>
    </S.Container>
  );
};
