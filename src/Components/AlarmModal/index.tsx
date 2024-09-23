import { Font } from "../../Styles/Font";
import * as S from "./styled";

export const AlarmModal = () => {
  return (
    <S.Container>
      <Font text="알림" kind="SubTitle2" />
      <S.AlarmWrapper>
        <S.Alarm>
          <S.Title>
            <Font text="오늘 급식에 생선 나와요. 주의하세요!" kind="Label2" />
            <S.Check></S.Check>
          </S.Title>
          <Font text="1일전" kind="Label3" color="gray600" />
        </S.Alarm>
      </S.AlarmWrapper>
    </S.Container>
  );
};
