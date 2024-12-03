import * as S from "./style";
import { Font } from "../../Styles/Font";

interface ButtonProps {
  Check: () => void;
  Cancel: () => void;
}

const CheckCancelButton = ({ Check, Cancel }: ButtonProps) => {
  return (
    <S.ButtonWrap>
      <S.CancelButton onClick={Cancel}>
        <Font text="취소" kind="Button2" color="white" />
      </S.CancelButton>
      <S.CheckButton onClick={Check}>
        <Font text="확인" kind="Button2" color="white" />
      </S.CheckButton>
    </S.ButtonWrap>
  );
};

export default CheckCancelButton;
