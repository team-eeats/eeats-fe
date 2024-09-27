import styled from "styled-components";
import {Color} from "../../Styles/Color"

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 26vw;
  height: 45vh;
  border: 1px solid ${Color.main100};
  border-radius: 30px;
  gap: 40px;
`;

export const MealList = styled.div`
  line-height: 25px;
`

export const Kcal = styled.p`
  color: ${Color.gray400};
`