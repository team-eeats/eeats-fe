import { useNavigate } from 'react-router-dom';
import { Font } from '../../Styles/Font';
import * as S from './style'

const ModifyDeleteModal = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Modal>
        <S.TextWrap onClick={() => navigate("/suggestModify")}>
          <Font kind="Button1" text="수정하기" />
        </S.TextWrap>
        <S.Line></S.Line>
        <S.TextWrap>
          <Font kind="Button1" text="삭제하기" color="main500" />
        </S.TextWrap>
      </S.Modal>
    </S.Container>
  )
}

export default ModifyDeleteModal;