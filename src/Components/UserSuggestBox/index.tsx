import { useEffect, useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";
import Setting from "../../assets/img/Setting.svg";
import ArrowRight from "../../assets/img/ArrowRight.svg";
import ModifyDeleteModal from "../ModifyDeleteModal";
import { Suggestions } from "../../Apis/suggestions/type";
import { SuggestList } from "../../Apis/suggestions";

/**
 *
 * @returns 급식 건의하기 학생 건의 컴포넌트
 */

const UserSuggestBox = () => {
  const [openModal, setOpenModal] = useState(false);
  const [suggestList, setSuggestList] = useState<Suggestions[]>([]);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const fetchSuggestList = async () => {
      try {
        const response = await SuggestList();
        setSuggestList(response.data.suggestions);
      } catch (error) {
        console.error("데이터 로딩 오류:", error);
      }
    };
    fetchSuggestList();
  }, []);

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${parseInt(month)}월 ${parseInt(day)}일`;
  };

  const toggleSelect = (index: number) => {
    setSelectedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {suggestList.map((suggestion: Suggestions, index: number) => (
        <S.Container
          key={index}
          onClick={() => toggleSelect(index)}
          selected={selectedIndexes.includes(index)}
        >
          <S.TopWrap>
            <S.NicknameAndDateWrap>
              <Font text={suggestion.accountId} kind="Body1" color="main200" />
              <Font
                text={formatDate(suggestion.createdAt)}
                kind="Body1"
                color="gray300"
              />
            </S.NicknameAndDateWrap>
            <img
              src={Setting}
              alt="더보기"
              onClick={(e) => {
                e.stopPropagation();
                setOpenModal(!openModal);
              }}
            />
          </S.TopWrap>

          <Font text={suggestion.title} kind="Heading3" />

          <Font text={suggestion.content} kind="Body2" color="gray600" />

          {selectedIndexes.includes(index) ? (
            <S.Comment>
              <img src={ArrowRight} alt="화살표" />
              <S.Input
                placeholder={
                  suggestion.comment && suggestion.comment.content
                    ? suggestion.comment.content
                    : "답변 대기 중입니다."
                }
                readOnly
              />
            </S.Comment>
          ) : (
            <></>
          )}
          {openModal && <ModifyDeleteModal />}
        </S.Container>
      ))}
    </>
  );
};

export default UserSuggestBox;
