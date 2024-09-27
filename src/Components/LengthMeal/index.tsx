import * as S from "./style";
import Breakfast from "../../assets/img/Breakfast.svg";
import Lunch from "../../assets/img/Lunch.svg";
import Dinner from "../../assets/img/Dinner.svg";
import { Font } from "../../Styles/Font";

interface MealListProps {
  selectedMeal: string;
}

/**
 * @returns 선택한 급식을 보여주는 컴포넌트
 */
const MealList = ({ selectedMeal }: MealListProps) => {
  const meals = [
    {
      name: "아침밥",
      image: Breakfast,
      menu: ["소보로덮밥", "얼갈이된장국"],
      kcal: "453Kcal",
    },
    {
      name: "점심밥",
      image: Lunch,
      menu: ["소보로덮밥", "얼갈이된장국"],
      kcal: "453Kcal",
    },
    {
      name: "저녁밥",
      image: Dinner,
      menu: ["소보로덮밥", "얼갈이된장국"],
      kcal: "453Kcal",
    },
  ];

  const meal = meals.find((meal) => meal.name === selectedMeal);

  if (!meal) return null;

  return (
    <S.Container>
      <img src={meal.image} alt={meal.name} />
      <S.MealList>
        {meal.menu.map((item, idx) => (
          <Font key={idx} text={item} kind="Body1" color="gray800" />
        ))}
      </S.MealList>
      <Font text={meal.kcal} kind="Caption2" color="gray400" />
    </S.Container>
  );
};

export default MealList;
