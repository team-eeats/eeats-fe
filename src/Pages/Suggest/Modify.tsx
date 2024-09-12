import * as S from './style'
import { Font } from '../../Styles/Font';
import Button from '../../Components/Button';

const Modify = () => {
  return (
    <S.Container>
      <S.SubmitContent>
        <S.ContentBox>
          <S.Title>
            <Font text="건의 수정하기" kind="Heading1" />
          </S.Title>
          <S.Write>
            <S.LabelWrap>
              <Font text="제목" kind="Label2" />
              <S.Input placeholder="제목을 작성해주세요"></S.Input>
            </S.LabelWrap>
            <S.LabelWrap>
              <Font text="건의 내용" kind="Label2" />
              <S.TextAreaWrap>
                <S.TextArea placeholder="건의 내용을 작성해주세요"></S.TextArea>
                <S.CharacterLimitation>
                  <Font text="7/30" kind="Caption2" color="gray300" />
                </S.CharacterLimitation>
              </S.TextAreaWrap>
            </S.LabelWrap>
          </S.Write>
        </S.ContentBox>
        <Button text="수정하기" activate onClick={() => { }} />
      </S.SubmitContent>
    </S.Container>
  )
}

export default Modify;