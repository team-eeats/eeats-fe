import * as S from "./style";
import MyPage from "../../Assets/img/SVG/MyPage.svg";
import Alarm from "../../Assets/img/SVG/Alarm.svg";
import Logo from "../../Assets/img/SVG/Logo.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Logo
        src={Logo}
        onClick={() => {
          navigate("/main");
        }}
      />
      <S.IconWrapper>
        <S.Icon src={Alarm} />
        <S.Icon src={MyPage} />
      </S.IconWrapper>
    </S.Container>
  );
};
