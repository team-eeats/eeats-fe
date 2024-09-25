import SuggestBox from "../../Components/UserSuggestBox";
import { Font } from "../../Styles/Font";
import * as S from "./style";

export const MySuggestPage = () => {
  return (
    <S.Container>
      <Font text="공지사항" kind="Heading1" color="black" />
      <S.SuggestWrapper>
        <SuggestBox />
        <SuggestBox />
        <SuggestBox />
        <SuggestBox />
        <SuggestBox />
        <SuggestBox />
        <SuggestBox />
      </S.SuggestWrapper>
    </S.Container>
  );
};
