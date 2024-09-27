import { Color } from "../../Styles/Color";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
gap: 84px;
`

export const DoughnutContent = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

export const Hide = styled.div`
position: absolute;
z-index: 1;
width: 100%;
height: 50px;
background-color: white;
`

export const VoteNumber = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%);
display: flex;
flex-direction: column;
align-items: center;
`

export const ResultWrap = styled.div`
width: 656px;
height: 320px;
padding: 34px 78px;
display: flex;
flex-direction: column;
gap: 28px;
border-radius: 40px;
border: 1px solid ${Color.gray50};
`

export const MenuAndPercent = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

export const MenuWrap = styled.div`
display: flex;
gap: 12px;
align-items: center;
`

export const PointLine = styled.div`
width: 4px;
height: 14px;
background-color: #FF583B;
border-radius: 4px;
`

export const Image = styled.img``;