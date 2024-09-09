import { Font } from "../../Styles/Font"
import * as S from "./Styled"

/**
 * 
 * @returns 해당 급식에 알레르기가 없음을 알려주는 컴포넌트
 */

const NoAllergy = () => {
  return (
    <>
      <S.Container>
        <Font text="오늘 Meallist에서 나의 알레르기는?" kind="Label2" color="gray400" />
        <S.SubTitle>
          없습니다.<br />
          맛있게 드세요!
        </S.SubTitle>
      </S.Container>
    </>
  );
};

export default NoAllergy;
