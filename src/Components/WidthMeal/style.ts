import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.main`
  display: flex;
  flex-direction: column; 
  gap: 20px;
`;

export const MealWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 468px;
  height: 165px;
  background-color: ${Color.main0};
  border-radius: 30px;
`;

export const MealList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;
`;

