import { Font } from "../../Styles/Font";
import * as S from "./style";
import CheckCancelButton from "../CheckCancelButton";
import AllergyTags from "../AllergyTags";

export const ChooseAllergy = () => {
  const Allergy = [
    { name: "알류" },
    { name: "우유" },
    { name: "메밀" },
    { name: "땅콩" },
    { name: "대두" },
    { name: "밀" },
    { name: "잣" },
    { name: "호두" },
    { name: "게" },
    { name: "새우" },
    { name: "오징어" },
    { name: "고등어" },
    { name: "조개류" },
    { name: "복숭아" },
    { name: "토마토" },
    { name: "닭고기" },
    { name: "돼지고기" },
    { name: "쇠고기" },
    { name: "아황산류" },
  ];
  return (
    <S.Container>
      <S.Modal>
        <S.TextWrapper>
          <Font kind="Heading3" text="정말 삭제하시겠습니까?" />
          <Font
            kind="Body2"
            text="확인 시 해당 건의는 사라집니다."
            color="gray600"
          />
        </S.TextWrapper>
        <S.AllergyWrapper>
          {Allergy.map((element, index) => (
            <AllergyTags food={element.name} key={index} />
          ))}
        </S.AllergyWrapper>
        <S.Div>
          <CheckCancelButton />
        </S.Div>
      </S.Modal>
    </S.Container>
  );
};
