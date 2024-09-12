import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
width: 100%;
height: 100vh;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color : rgba(0,0,0,0.2);
z-index: 100;
`

export const Modal = styled.div`
width: 480px;
border-radius: 12px;
background-color: ${Color.white};
`

export const TextWrap = styled.div`
width: 100%;
height: 101px;
display: flex;
justify-content: center;
padding: 36px 124px;
`

export const Line = styled.div`
width: 400px;
height: 1px;
background-color: ${Color.gray50};
`