import Lunch from "../../assets/img/Lunch.svg"
import * as S from "./Styled"
import {Font} from "../../Styles/Font"

/**
 * 
 * @returns 점심 급식 컴포넌트
 */

const LunchList = () => {
  return (
    <>
      <S.Container>
        <img src={Lunch} alt="" />
        <S.MealList>
          <Font text="소보로덮밥" kind="Body1" color="gray800" />
          <Font text="얼갈이된장국" kind="Body1" color="gray800" />
        </S.MealList>
        <div>
          <Font text="453Kcal" kind="Caption2" color="gray400" />
        </div>
      </S.Container>
    </>
  )
}

export default LunchList