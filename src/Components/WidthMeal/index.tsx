import * as S from "./style";
import Breakfast from "../../assets/img/Breakfast.svg";
import Lunch from "../../assets/img/Lunch.svg";
import Dinner from "../../assets/img/Dinner.svg";
import { Font } from "../../Styles/Font";
import { useEffect, useState } from "react";
import { Meals } from "../../Apis/meals";
import { MealsRespond } from "../../Apis/meals/type";

/**
 * 선택한 급식을 보여주는 컴포넌트
 */

type WidthMealProps = {
  date: () => string;
};

const WidthMeal: React.FC<WidthMealProps> = ({ date }) => {
  const [mealList, setMealList] = useState<MealsRespond | null>(null);

  useEffect(() => {
    const MealsList = async () => {
      try {
        const formattedDate = date();
        const response = await Meals(formattedDate);
        setMealList(response.data);
      } catch (error) {
        console.error("데이터 로딩 오류:", error);
      }
    };
    MealsList();
  }, [date]);

  const meals = [
    {
      name: "아침밥",
      image: Breakfast,
      menu: mealList?.breakfast || [],
    },
    {
      name: "점심밥",
      image: Lunch,
      menu: mealList?.lunch || [],
    },
    {
      name: "저녁밥",
      image: Dinner,
      menu: mealList?.dinner || [],
    },
  ];

  const removeParenthesis = (menu: string) => {
    return menu
      .replace(/\s*\(.*?\)/g, "") // 괄호와 그 안의 내용을 제거
      .replace(/\d.*$/, "") // 칼로리 제거
      .split(",") // 쉼표로 항목을 분리
      .map((item) => item.trim()) // 각 항목 앞뒤 공백 제거
      .join("\n"); // 항목을 줄바꿈으로 이어줌
  };

  return (
    <S.Container>
      {meals.map((item, idx) => {
        const formattedMenu = Array.isArray(item.menu)
          ? item.menu.map(removeParenthesis).join("\n")
          : removeParenthesis(item.menu);
        return (
          <S.MealWrapper key={idx}>
            <img src={item.image} alt={item.name} />
            <S.MealList style={{ whiteSpace: "pre-line" }}>
              {item.menu.length > 0 ? (
                <Font text={formattedMenu} kind="Body3" color="gray800" />
              ) : (
                <Font
                  text="급식 정보가 없습니다."
                  kind="Body3"
                  color="gray500"
                />
              )}
            </S.MealList>
          </S.MealWrapper>
        );
      })}
    </S.Container>
  );
};

export default WidthMeal;
