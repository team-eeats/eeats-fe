import * as S from "./style";
import MyPage from "../../Assets/img/SVG/MyPage.svg";
import Alarm from "../../Assets/img/SVG/Alarm.svg";
import Logo from "../../Assets/img/SVG/Logo.svg";

export const Header = () => {
  return (
    <S.Container>
      <S.Logo src={Logo} />
      <S.IconWrapper>
        <S.Icon src={Alarm} />
        <S.Icon src={MyPage} />
      </S.IconWrapper>
    </S.Container>
  );
};
