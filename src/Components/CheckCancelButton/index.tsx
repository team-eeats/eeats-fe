import * as S from "./style";
import { Font } from "../../Styles/Font";
import { DeleteSuggest } from "../../Apis/suggestions";

interface ButtonProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const CheckCancelButton = ({ onConfirm, onCancel }: ButtonProps) => {

  return (
    <S.ButtonWrap>
      <S.CancelButton onClick={onCancel}>
        <Font text="취소" kind="Button2" color="white" />
      </S.CancelButton>
      <S.CheckButton onClick={onConfirm}>
        <Font text="확인" kind="Button2" color="white" />
      </S.CheckButton>
    </S.ButtonWrap>
  );
};

export default CheckCancelButton;
