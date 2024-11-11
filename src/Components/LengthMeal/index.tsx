import * as S from "./style";
import Breakfast from "../../assets/img/Breakfast.svg";
import Lunch from "../../assets/img/Lunch.svg";
import Dinner from "../../assets/img/Dinner.svg";
import { Font } from "../../Styles/Font";
import { Meals } from "../../Apis/meals";
import { useEffect, useState } from "react";
import { MealsRespond } from "../../Apis/meals/type";

interface MealListProps {
  selectedMeal: string;
}

/**
 * @returns 선택한 급식을 보여주는 컴포넌트
 */

const MealList = ({ selectedMeal }: MealListProps) => {
  const [mealList, setMealList] = useState<MealsRespond | null>(null);

  useEffect(() => {
    const MealsList = async () => {
      try {
        const today = new Date();
        const formattedDate = today
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "");
        const response = await Meals(formattedDate);
        setMealList(response.data);
      } catch (error) {
        console.error("데이터 로딩 오류:", error);
      }
    };
    MealsList();
  }, []);

  // mealList가 null일 때는 로딩 중 메시지를 반환
  if (!mealList) {
    return <div>로딩 중...</div>;
  }

  const meals = [
    {
      name: "아침밥",
      image: Breakfast,
      menu: mealList.breakfast[0],
      kcal: mealList.breakfast[1],
    },
    {
      name: "점심밥",
      image: Lunch,
      menu: mealList.lunch[0],
      kcal: mealList.lunch[1],
    },
    {
      name: "저녁밥",
      image: Dinner,
      menu: mealList.dinner[0],
      kcal: mealList.dinner[1],
    },
  ];

  const meal = meals.find((meal) => meal.name === selectedMeal);

  if (!meal) return null;

  const removeParenthesis = (menu: string) => {
    return menu
      .replace(/\s*\(.*?\)/g, "") // 괄호와 그 안의 내용을 제거
      .split(",") // 쉼표로 항목을 분리
      .map((item) => item.trim()) // 각 항목 앞뒤 공백 제거
      .join("\n"); // 항목을 줄바꿈으로 이어줌
  };

  const formattedMenu = removeParenthesis(meal.menu);

  return (
    <S.Container>
      <img src={meal.image} alt={meal.name} />
      <S.MealList style={{ whiteSpace: "pre-line" }}>
        <Font text={formattedMenu} kind="Body1" color="gray800" />
      </S.MealList>
      <Font text={meal.kcal} kind="Caption2" color="gray400" />
    </S.Container>
  );
};

export default MealList;
