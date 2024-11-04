import { Font } from "../../Styles/Font";
import * as S from "./style";
import CheckCancelButton from "../CheckCancelButton";

type LogoutProps = {
  onClose: () => void
}

export const UserLayout: React.FC<LogoutProps> = () => {
  return (
    <S.Container>
      <S.Content>
        <S.TextWrap>
          <Font kind="Heading3" text="로그아웃 하시겠습니까?" />
          <Font
            kind="Body2"
            text="다음 접속 시 다시 로그인을 해야 합니다."
            color="gray600"
          />
        </S.TextWrap>
        <CheckCancelButton />
      </S.Content>
    </S.Container>
  );
};
