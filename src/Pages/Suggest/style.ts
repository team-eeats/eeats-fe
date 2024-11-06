import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const Content = styled.div`
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

export const SubmitContent = styled.div`
width: 600px;
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 32px;
`

export const ContentBox = styled.div`
display: flex;
flex-direction: column;
gap: 60px;
`

export const Title = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

export const Write = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
`

export const LabelWrap = styled.div`
width: 600px;
display: flex;
flex-direction: column;
gap: 12px;
`

export const Input = styled.input`
padding: 16px 24px;
border: none;
border-radius: 12px;
background-color: ${Color.gray0};
`

export const TextAreaWrap = styled.div`
position: relative;
`

export const TextArea = styled.textarea`
width: 100%;
height: 160px;
padding: 16px 24px;
border: none;
border-radius: 12px;
background-color: ${Color.gray0};
`

export const CharacterLimitation = styled.div`
position: absolute;
bottom: 12px;
right: 16px;
`