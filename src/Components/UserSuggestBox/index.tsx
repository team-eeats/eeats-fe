import { useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";
import Setting from "../../assets/img/Setting.svg";
import ArrowRight from "../../assets/img/ArrowRight.svg";
import ModifyDeleteModal from "../ModifyDeleteModal";
import { Suggestions } from "../../Apis/suggestions/type";
import { useModal } from "../../Hook/useModal";

/**
 *
 * @returns 급식 건의하기 학생 건의 컴포넌트
 */

const UserSuggestBox = ({ value }: { value: Suggestions }) => {
  const suggestionId = value.id;
  const [selected, setSelected] = useState(false);
  const { openModal, closeModal, isOpen } = useModal(suggestionId);

  const handleOpenModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    openModal();
  };

  return (
    <S.Container onClick={() => setSelected(!selected)}>
      <S.TopWrap>
        <S.NicknameAndDateWrap>
          <Font text={value.accountId} kind="Body1" color="main200" />
          <Font text={value.createdAt} kind="Body1" color="gray300" />
        </S.NicknameAndDateWrap>
        <img
          src={Setting}
          alt="더보기"
          onClick={handleOpenModal}
        />
      </S.TopWrap>

      <Font text={value.title} kind="Heading3" />
      <Font text={value.content} kind="Body2" color="gray600" />

      {selected && (
        <S.Comment>
          <img src={ArrowRight} alt="화살표" />
          <S.Input
            placeholder={
              value.comment && value.comment.content
                ? value.comment.content
                : "답변 대기 중입니다."
            }
            readOnly
          />
        </S.Comment>
      )}
      {isOpen && <ModifyDeleteModal id={suggestionId} close={closeModal} />}
    </S.Container>
  );
};

export default UserSuggestBox;
