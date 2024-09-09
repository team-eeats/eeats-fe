import { useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";

const VoteType = () => {
  const [selectType, setSelectType] = useState<string>("ing");

  const handleSelectType = (type: string) => {
    setSelectType(type);
  };
  return (
    <S.VoteTypeContainer>
      <S.TypeOfVote
        select={selectType === "ing"}
        onClick={() => handleSelectType("ing")}
      >
        <Font
          text="현재 진행 중인 투표"
          kind="label2"
          color={selectType === "ing" ? "white" : "black"}
        />
      </S.TypeOfVote>
      <S.TypeOfVote
        select={selectType === "end"}
        onClick={() => handleSelectType("end")}
      >
        <Font
          text="종료된 투표"
          kind="label2"
          color={selectType === "end" ? "white" : "black"}
        />
      </S.TypeOfVote>
    </S.VoteTypeContainer>
  );
};

export default VoteType;
