import * as S from "./style";
import MyPage from "../../Assets/img/SVG/MyPage.svg";
import Alarm from "../../Assets/img/SVG/Alarm.svg";
import Logo from "../../Assets/img/SVG/Logo.svg";
import { useNavigate } from "react-router-dom";
import { AlarmModal } from "../AlarmModal";
import { MyPageModal } from "../MyPageModal";
import { useModal } from "../../Hook/useModal";

export const Header = () => {
  const { isOpen: isAlarmOpen, onToggle: toggleAlarm } = useModal("alarm");
  const { isOpen: isMyPageOpen, onToggle: toggleMyPage } = useModal("myPage");

  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo
          src={Logo}
          onClick={() => {
            navigate("/main");
          }}
        />
        <S.IconWrapper>
          <S.Icon src={Alarm} onClick={toggleAlarm} />
          <S.Icon src={MyPage} onClick={toggleMyPage} />
        </S.IconWrapper>
      </S.Container>
      {isAlarmOpen && <AlarmModal onClose={toggleAlarm} />}
      {isMyPageOpen && <MyPageModal onClose={toggleMyPage} />}
    </S.Wrapper>
  );
};
