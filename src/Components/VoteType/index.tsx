import { useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";

const VoteType = () => {
  const [selectType, setSelectType] = useState<boolean>(true);

  const handleSelectType = (type: string) => {
    if (type === "ing") {
      setSelectType(true);
    } else setSelectType(false);
  };
  return (
    <S.VoteTypeContainer>
      <S.TypeOfVote select={selectType} onClick={() => handleSelectType("ing")}>
        <Font
          text="현재 진행 중인 투표"
          kind="label2"
          color={selectType ? "white" : "black"}
        />
      </S.TypeOfVote>
      <S.TypeOfVote
        select={!selectType}
        onClick={() => handleSelectType("end")}
      >
        <Font
          text="종료된 투표"
          kind="label2"
          color={!selectType ? "white" : "black"}
        />
      </S.TypeOfVote>
    </S.VoteTypeContainer>
  );
};

export default VoteType;
