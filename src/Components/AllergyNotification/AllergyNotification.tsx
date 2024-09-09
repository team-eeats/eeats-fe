import { Font } from "../../Styles/Font"
import * as S from "./Styled"

/**
 * 
 * @returns 해당 급식에 포함된 알레르기 정보를 알려주는 컴포넌트
 */

const AllergyNotification = () => {
  return (
    <>
      <S.Container>
        <Font text="오늘 Meallist에서 나의 알레르기는?" kind="Label2" color="gray400" />
        <S.SubTitle>
          <S.ImpactText>{"MealName"}</S.ImpactText>에<br />
          <S.ImpactText>{"Allergy"}</S.ImpactText> 알레르기 성분이 있어요!
        </S.SubTitle>
      </S.Container>
    </>
  );
};

export default AllergyNotification;
