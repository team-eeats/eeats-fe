import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Font } from "../../Styles/Font";
import * as S from "./style";
import DeleteModal from "../DeleteModal";
import { useModal } from "../../Hook/useModal";

const ModifyDeleteModal = ({
  id,
  close,
}: {
  id: string;
  close: () => void;
}) => {
  const navigate = useNavigate();
  const [deleteSuggest, setDeleteSuggest] = useState<boolean>(false);

  const { closeModal, isOpen } = useModal("suggestId");

  const handleDelete = () => {
    setDeleteSuggest(true);
  };

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <>
      {deleteSuggest ? (
        <DeleteModal id={id} close={close} />
      ) : (
        <S.Container>
          <S.Modal>
            <S.TextWrap
              onClick={() =>
                navigate("/suggestModify", { state: { suggestionId: id } })
              }
            >
              <Font kind="Button1" text="수정하기" />
            </S.TextWrap>
            <S.Line />
            <S.TextWrap onClick={handleDelete}>
              <Font kind="Button1" text="삭제하기" color="main500" />
            </S.TextWrap>
          </S.Modal>
        </S.Container>
      )}
      {isOpen && <DeleteModal id={id} close={closeModal} />}
    </>
  );
};

export default ModifyDeleteModal;
