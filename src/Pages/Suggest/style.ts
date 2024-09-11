import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

export const Content = styled.div`
position: relative;
width: 1040px;
display: flex;
flex-direction: column;
gap: 28px;
`

export const SuggestWrap = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`

export const ProposalButton = styled.button`
position: fixed;
right: 15%;
bottom: 48px;
display: flex;
align-items: center;
padding: 8px 12px;
gap: 4px;
background-color: ${Color.main500};
border: none;
border-radius: 12px;
`

export const Icon = styled.img`
width: 28px;
height: 28px;
`