import { Font } from "../../Styles/Font";
import * as S from "./style";
import CheckCancelButton from "../CheckCancelButton";
import { Cookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";

type LogoutProps = {
  onClose: () => void;
};

export const Logout: React.FC<LogoutProps> = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookie.remove("accessToken");
    Cookie.remove("refreshToken");
    Cookie.remove("nickname");
    navigate("/");
  };
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
        <CheckCancelButton Check={logout} Cancel={close} />
      </S.Content>
    </S.Container>
  );
};
