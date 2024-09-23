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

export const Content = styled.div`
display: flex;
flex-direction: column;
padding: 28px 60px;
border-radius: 20px;
gap: 40px;
background-color: white;
`

export const TextWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`