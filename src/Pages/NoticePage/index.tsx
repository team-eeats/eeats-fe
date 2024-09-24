import Notice from "../../Components/Notice";
import { Font } from "../../Styles/Font";
import * as S from "./style";

export const NoticePage = () => {
  return (
    <S.Container>
      <Font text="공지사항" kind="Heading1" color="black" />
      <S.NoticeWrapper>
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice />
      </S.NoticeWrapper>
    </S.Container>
  );
};
