import * as S from './style'
import { Font } from '../../Styles/Font'

const CheckCancelButton = () => {
  return (
    <S.ButtonWrap>
      <S.CancelButton>
        <Font text="취소" kind="Button2" color="white" />
      </S.CancelButton>
      <S.CheckButton>
        <Font text="확인" kind="Button2" color="white" />
      </S.CheckButton>
    </S.ButtonWrap>
  )
}

export default CheckCancelButton