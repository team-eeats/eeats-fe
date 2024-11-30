import * as S from "./style";
import { Font } from "../../Styles/Font";
import { DeleteSuggest } from "../../Apis/suggestions";

interface ButtonProps {
  id: string;
  close: () => void;
}

const CheckCancelButton = ({ id, close }: ButtonProps) => {
  const handleDelete = async () => {
    try {
      await DeleteSuggest(id);
      close();
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <S.ButtonWrap>
      <S.CancelButton onClick={close}>
        <Font text="취소" kind="Button2" color="white" />
      </S.CancelButton>
      <S.CheckButton onClick={handleDelete}>
        <Font text="확인" kind="Button2" color="white" />
      </S.CheckButton>
    </S.ButtonWrap>
  );
};

export default CheckCancelButton;
