import { useState } from "react";
import { ModifyMyinfo } from "../../Apis/users";
import { Font } from "../../Styles/Font";
import CheckCancelButton from "../CheckCancelButton";
import Input from "../Input";
import * as S from "./style";
import { Cookie } from "../../utils/cookie";

type NicknameChangeProps = {
  onClose: () => void;
  onNicknameChange?: (newNickname: string) => void;
};

export const NicknameChange: React.FC<NicknameChangeProps> = ({ onClose, onNicknameChange }) => {
  const [nickname, setNickname] = useState("");

  const handleChangeNickname = async () => {
    try {
      const res = await ModifyMyinfo({ nickname });
      Cookie.set("nickname", res.data.nickname);
      if (onNicknameChange) onNicknameChange();
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.Background>
      <S.Container>
        <Font text="변경할 닉네임을 입력해주세요" kind="Heading3" color="black" />
        <Input
          placeholder="멋진 토마토"
          type="text"
          id="변경 닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <div>
          <CheckCancelButton onConfirm={handleChangeNickname} onCancel={onClose} />
        </div>
      </S.Container>
    </S.Background>
  );
};
