import { MyPageAllergiesType } from "../../Apis/users/type";
import { Font } from "../../Styles/Font";
import * as S from "./style";

interface AllergyTagsPropsType {
  food: MyPageAllergiesType;
}

export const MyAllergy = ({food}: AllergyTagsPropsType) => {
  return (
    <S.MyAllergy>
      {food.type.map((allergy) => (
        <Font text={allergy} kind="label3" color="white"></Font>
      ))}
    </S.MyAllergy>
  );
};
