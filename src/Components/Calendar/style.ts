import styled from "styled-components";

export const Container = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CalendarShiftWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DayWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Day = styled.div`
  width: 64px;
  height: 64px;
  padding: 10px 22px;
  border-radius: 12px;
`;

export const Date = styled.div<{ isToday: boolean; isPast: boolean; isCurrentMonth: boolean; isSelected: boolean }>`
  width: 64px;
  height: 64px;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.isSelected ? '#FF765D' :
    props.isToday ? '#FFE7E3' :
    !props.isCurrentMonth ? '#F3F3F3' :
    '#FFFFFF'};
   color: ${props =>
    props.isSelected ? '#FFFFFF' :
    props.isToday ? '#000000' :
    !props.isCurrentMonth ? '#B4B4B4' :
    '#000000'};
  border-radius: 12px;
  cursor: pointer;
  font-family: "Pretendard-Semibold", sans-serif;
  font-size: 20px;
`;

export const Month = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Week = styled.div`
  display: flex;
  gap: 12px;
`;
