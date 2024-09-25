import { Font } from "../../Styles/Font";
import * as S from "./style";
import CheckCancelButton from "../CheckCancelButton";
import AllergyTags from "../AllergyTags";

export const ChooseAllergy = () => {
  const Allergy = [
    "알류",
    "우유",
    "메밀",
    "땅콩",
    "대두",
    "밀",
    "잣",
    "호두",
    "게",
    "새우",
    "오징어",
    "고등어",
    "조개류",
    "복숭아",
    "토마토",
    "닭고기",
    "돼지고기",
    "쇠고기",
    "아황산류",
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
            <AllergyTags food={element} key={index} />
          ))}
        </S.AllergyWrapper>
        <S.Div>
          <CheckCancelButton />
        </S.Div>
      </S.Modal>
    </S.Container>
  );
};
