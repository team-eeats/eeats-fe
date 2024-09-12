import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 480px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 12px;
`

export const TextWrap = styled.div`
display: flex;
justify-content: center;
padding: 36px 124px;
`

export const Line = styled.div`
width: 400px;
height: 1px;
background-color: ${Color.gray50};
`