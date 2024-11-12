import { useState } from "react";
import * as S from "./style";
import AllergyNotification from "../../Components/AllergyNotification/AllergyNotification";
import Announcement from "../../Components/Announcement/Announcement";
import MealTime from "../../Components/MealTime";
import { Font } from "../../Styles/Font";
import DonutGraph from "../../Components/DonutGraph";
import Calendar from "../../Components/Calendar";
import WidthMeal from "../../Components/WidthMeal";

const Main = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const formatDisplayedDate = () => {
    if (!selectedDate) return "";

    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();

    return `${month}월 ${day}일`;
  };

  const formatApiDate = () => {
    if (!selectedDate) return "";

    const year = selectedDate.getFullYear();
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
    const day = selectedDate.getDate().toString().padStart(2, "0");

    return `${year}${month}${day}`;
  };

  return (
    <S.Container>
      <Announcement />
      <S.MealBox>
        <Font text="오늘의 급식" kind="Heading3" color="gray800" />
        <S.Meal>
          <MealTime />
        </S.Meal>
      </S.MealBox>
      <S.GraphBox>
        <S.GraphTitle>
          <Font text="어제 인기 급식" kind="Heading3" color="gray800" />
          <Font
            text="어제 가장 인기 많았던 급식 순위를 확인하세요!"
            kind="Body2"
            color="gray600"
          />
        </S.GraphTitle>
        <S.Graph>
          <DonutGraph />
        </S.Graph>
      </S.GraphBox>
      <S.CalendarBox>
        <S.CalendarTitle>
          <Font text="다른 날 급식 보기" kind="Heading3" color="gray800" />
          <Font
            text="달력으로 쉽게 다른 날의 급식을 확인해보세요!"
            kind="Body2"
            color="gray600"
          />
        </S.CalendarTitle>
        <S.CalenderMenu>
          <Calendar onDateSelect={handleDateSelect} />
          <S.NextMeal>
            <Font
              text={`${formatDisplayedDate()}의 급식`}
              kind="Heading3"
              color="gray800"
            />
            <WidthMeal date={formatApiDate} />
          </S.NextMeal>
        </S.CalenderMenu>
      </S.CalendarBox>
    </S.Container>
  );
};

export default Main;
