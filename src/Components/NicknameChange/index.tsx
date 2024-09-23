import { Font } from "../../Styles/Font";
import CheckCancelButton from "../CheckCancelButton";
import Input from "../Input/Input";
import * as S from "./style";

export const NicknameChange = () => {
  return (
    <S.Container>
      <Font text="변경할 닉네임을 입력해주세요" kind="Heading3" color="black" />
      <Input placeholder="멋진 토마토" type="text" id="변경 닉네임" />
      <div>
        <CheckCancelButton />
      </div>
    </S.Container>
  );
};
