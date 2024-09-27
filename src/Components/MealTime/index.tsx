import { useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";
import MealList from "../LengthMeal/index";

/**
 * @returns 아침, 점심, 저녁 선택 컴포넌트
 */
const MealTime = () => {
  const [selectedMeal, setSelectedMeal] = useState<string>("아침밥");

  const Meals = ["아침밥", "점심밥", "저녁밥"];

  const handleMealClick = (meal: string) => {
    setSelectedMeal(meal);
  };

  return (
    <>
      <S.Container>
        {Meals.map((meal) => (
          <S.Btn
            key={meal}
            isSelected={selectedMeal === meal}
            onClick={() => handleMealClick(meal)}
          >
            <Font
              text={meal}
              kind="SubTitle1"
              color={selectedMeal === meal ? "white" : "gray600"}
            />
          </S.Btn>
        ))}
      </S.Container>
      <MealList selectedMeal={selectedMeal} />
    </>
  );
};

export default MealTime;
