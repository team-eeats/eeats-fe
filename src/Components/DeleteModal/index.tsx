import { Font } from "../../Styles/Font";
import * as S from "./style";
import CheckCancelButton from "../CheckCancelButton";
import { DeleteSuggest } from "../../Apis/suggestions";

const DeleteModal = ({ id, close }: { id: string; close: () => void }) => {
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
    <S.Container>
      <S.Content>
        <S.TextWrap>
          <Font kind="Heading3" text="정말 삭제하시겠습니까?" />
          <Font
            kind="Body2"
            text="확인 시 해당 건의는 사라집니다."
            color="gray600"
          />
        </S.TextWrap>
        <CheckCancelButton Check={handleDelete} Cancel={close} />
      </S.Content>
    </S.Container>
  );
};

export default DeleteModal;
