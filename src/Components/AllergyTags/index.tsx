import { useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";

interface AllergyTagsPropsType {
  food: string;
}

const AllergyTags = (props: AllergyTagsPropsType) => {
  const [select, setSelect] = useState<boolean>(false);

  const handleClick = () => {
    setSelect(!select);
  };

  return (
    <S.AllergyTags select={select} onClick={handleClick}>
      <Font
        text={props.food}
        kind="label1"
        color={select ? "white" : "black"}
      ></Font>
    </S.AllergyTags>
  );
};

export default AllergyTags;
