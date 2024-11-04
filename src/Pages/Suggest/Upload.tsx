import { useState } from 'react';
import * as S from './style'
import { Font } from '../../Styles/Font';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const navigation = useNavigate()
  const [inputCount, setInputCount] = useState<number>(0)
  const [excessLimit, setExcessLimit] = useState<boolean>(false)

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCount(e.target.value.length);
    if (inputCount > 30) {
      return setExcessLimit(true)
    }
    setExcessLimit(false)
  }

  return (
    <S.Container>
      <S.SubmitContent>
        <S.ContentBox>
          <S.Title>
            <Font text="급식 건의하기" kind="Heading1" />
          </S.Title>
          <S.Write>
            <S.LabelWrap>
              <Font text="제목" kind="Label2" />
              <S.Input placeholder="제목을 작성해주세요"></S.Input>
            </S.LabelWrap>
            <S.LabelWrap>
              <Font text="건의 내용" kind="Label2" />
              <S.TextAreaWrap>
                <S.TextArea placeholder="건의 내용을 작성해주세요" onChange={(e) => onInputHandler(e)}></S.TextArea>
                <S.CharacterLimitation>
                  <Font text={`${inputCount}/30`} kind="Caption2" color={`${excessLimit ? "main300" : "gray300"}`} />
                </S.CharacterLimitation>
              </S.TextAreaWrap>
            </S.LabelWrap>
          </S.Write>
        </S.ContentBox>
        <Button text="건의하기" activate onClick={() => navigation("/suggest")} />
      </S.SubmitContent>
    </S.Container>
  )
}

export default Upload;