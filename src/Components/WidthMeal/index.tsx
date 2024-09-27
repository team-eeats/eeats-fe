import * as S from "./style";
import Breakfast from "../../assets/img/Breakfast.svg";
import Lunch from "../../assets/img/Lunch.svg";
import Dinner from "../../assets/img/Dinner.svg";
import { Font } from "../../Styles/Font";

/**
 *
 * @returns 선택한 급식을 보여주는 컴포넌트
 */
const WidthMeal = () => {
  const meals = [
    {
      name: "아침밥",
      image: Breakfast,
      menu: ["소보로덮밥", "얼갈이된장국", "미트볼스파게티"],
    },
    {
      name: "점심밥",
      image: Lunch,
      menu: ["소보로덮밥", "얼갈이된장국", "지파이 피카츄 & 소스"],
    },
    {
      name: "저녁밥",
      image: Dinner,
      menu: ["소보로덮밥", "얼갈이된장국"],
    },
  ];

  return (
    <S.Container>
      {meals.map((item, idx) => (
        <S.MealWrapper key={idx}>
          <img src={item.image} alt={item.name} />
          <S.MealList>
            {item.menu.map((menuItem, menuIdx) => (
              <Font key={menuIdx} text={menuItem} kind="Body3" color="gray800" />
            ))}
          </S.MealList>
        </S.MealWrapper>
      ))}
    </S.Container>
  );
};

export default WidthMeal;
