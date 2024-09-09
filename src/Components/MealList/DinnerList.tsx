import Dinner from "../../assets/img/Dinner.svg";
import * as S from "./Styled";
import { Font } from "../../Styles/Font";

/**
 *
 * @returns 저녁 급식 컴포넌트
 */

const DinnerList = () => {
  return (
    <>
      <S.Container>
        <img src={Dinner} alt="" />
        <S.MealList>
          <Font text="소보로덮밥" kind="Body1" color="gray800" />
          <Font text="얼갈이된장국" kind="Body1" color="gray800" />
        </S.MealList>
        <div>
          <Font text="453Kcal" kind="Caption2" color="gray400" />
        </div>
      </S.Container>
    </>
  );
};

export default DinnerList;
