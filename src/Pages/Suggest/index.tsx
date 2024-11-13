import * as S from "./style";
import SuggestBox from "../../Components/UserSuggestBox";
import Announcement from "../../Components/Announcement/Announcement";
import { Font } from "../../Styles/Font";
import Write from "../../assets/img/SVG/Write.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SuggestListResponse } from "../../Apis/suggestions/type";
import { SuggestList } from "../../Apis/suggestions";

const Suggest = () => {
  const navigate = useNavigate();
  const [suggestList, setSuggestList] = useState<SuggestListResponse | null>(
    null
  );

  useEffect(() => {
    const fetchSuggestList = async () => {
      try {
        const response = await SuggestList();
        setSuggestList(response.data);
      } catch (error) {
        console.error("데이터 로딩 오류:", error);
      }
    };
    fetchSuggestList();
  }, []);

  console.log(suggestList?.suggestions.map((value) => (value)));
  

  return (
    <S.Container>
      <S.Content>
        <Announcement />
        <S.SuggestWrap>
          {suggestList?.suggestions.map((value) => (
            <SuggestBox key={value.id} value={value} />
          ))}
        </S.SuggestWrap>
      </S.Content>
      <S.ProposalButton onClick={() => navigate("/suggestUpload")}>
        <Font kind="Button2" text="급식 건의하기" color="white" />
        <S.Icon src={Write} />
      </S.ProposalButton>
    </S.Container>
  );
};

export default Suggest;
