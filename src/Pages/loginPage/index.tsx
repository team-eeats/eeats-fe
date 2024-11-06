import * as S from "./style";
import { Font } from "../../Styles/Font";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../Apis/auth";
import { Cookie } from "../../utils/cookie";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setButtonActive(id.trim() !== "" && password.trim() !== "");
  }, [id, password]);

  const handleLogin = () => {
    Login({
      account_id: id,
      password: password,
    })
      .then((res) => {
        Cookie.set("accessToken", res.data.accessToken);
        Cookie.set("refreshToken", res.data.refreshToken);
        navigate("/main");
      })
      .catch(() => {
        setPassword("");
      });
  };

  return (
    <S.LoginPageContainer>
      <div style={{ gap: "20px" }}>
        <Font text="eeats! 로그인 하기" kind="Heading1" color="black" />
        <Font
          text="스퀘어 계정으로 로그인해주세요"
          kind="label2"
          color="gray500"
        />
      </div>
      <div style={{ gap: "52px" }}>
        <Input
          id="id"
          type="text"
          placeholder="아이디 입력"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          id="password"
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button text="로그인" activate={buttonActive} onClick={handleLogin} />
    </S.LoginPageContainer>
  );
};

export default LoginPage;
