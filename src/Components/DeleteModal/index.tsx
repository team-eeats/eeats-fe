import { Font } from '../../Styles/Font';
import * as S from './style'
import Button from '../../Components/Button'

const DeleteModal = () => {
  return (
    <S.Container>
      <S.Content>
        <S.TextWrap>
          <Font kind="Heading3" text="정말 삭제하시겠습니까?" />
          <Font kind="Body2" text="확인 시 해당 건의는 사라집니다." color="gray600" />
        </S.TextWrap>
        <S.ButtonWrap>
          <S.DeleteButton onClick={() => {}}>
            <Font text="취소" kind="Button2" color="white" />
          </S.DeleteButton>
          <Button text="확인" activate={true} onClick={() => {}} />
        </S.ButtonWrap>
      </S.Content>
    </S.Container>
  )
}

export default DeleteModal;