import { Font } from "../../Styles/Font";
import * as S from "./style";

interface AllergyTagsPropsType {
  food: string;
}

export const MyAllergy = (props: AllergyTagsPropsType) => {
  return (
    <S.MyAllergy>
      <Font text={props.food} kind="label3" color="white"></Font>
    </S.MyAllergy>
  );
};
