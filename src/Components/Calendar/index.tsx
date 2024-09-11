import { useState } from "react";
import * as S from './style';
import { Font } from '../../Styles/Font';
import { ArrowLeft, ArrowRight } from "../../assets/img/SVG";

const day = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = new Date(firstDayOfMonth);
  startDay.setDate(1 - firstDayOfMonth.getDay());

  const endDay = new Date(year, month + 1, 0);

  const groupDatesByWeek = (startDay: Date, endDay: Date) => {
    const weeks = [];
    let currentWeek = [];
    let currentDate = new Date(startDay);

    while (currentDate <= endDay) {
      currentWeek.push(new Date(currentDate));
      if (currentWeek.length === 7 || currentDate.getDay() === 6) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return today.toDateString() === date.toDateString();
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    return date < today;
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const isSelectedDate = (date: Date) => {
    return selectedDate?.toDateString() === date.toDateString();
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <S.Container>
      <S.CalendarShiftWrap>
        <div onClick={handlePrevMonth}>
          <ArrowLeft />
        </div>
        <Font kind="Heading3" text={`${year}년 ${month + 1}월`} />
        <div onClick={handleNextMonth}>
          <ArrowRight />
        </div>
      </S.CalendarShiftWrap>
      <S.DayWrap>
        {day.map((value, index) => (
          <S.Day key={index}>
            <Font kind="Heading4" text={value} />
          </S.Day>
        ))}
      </S.DayWrap>
      <S.Month>
        {groupDatesByWeek(startDay, endDay).map((week, weekIndex) => (
          <S.Week key={weekIndex}>
            {week.map((date, dateIndex) => (
              <S.Date
                key={dateIndex}
                onClick={() => handleDateClick(date)}
                isToday={isToday(date)}
                isPast={isPastDate(date)}
                isCurrentMonth={isCurrentMonth(date)}
                isSelected={isSelectedDate(date)}
              >
                {date.getDate().toString()}
              </S.Date>
            ))}
          </S.Week>
        ))}
      </S.Month>
    </S.Container>
  );
};

export default Calendar;
