import * as S from "./style";
import { Font } from "../../Styles/Font";
import { ModifyMyinfo } from "../../Apis/users";
import { useState } from "react";
import { Cookie } from "../../utils/cookie";
import Input from "../Input";
import CheckCancelButton from "../CheckCancelButton";

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
      if (onNicknameChange) onNicknameChange(res.data.nickname);
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
          <CheckCancelButton Check={handleChangeNickname} Cancel={onClose} />
        </div>
      </S.Container>
    </S.Background>
  );
};
