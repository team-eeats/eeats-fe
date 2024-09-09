import * as S from "./Style";
import CloseEyes from "../../assets/img/SVG/CloseEyes.svg";
import OpenEyes from "../../assets/img/SVG/OpenEyes.svg";
import { useState } from "react";

interface InputProps {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: InputProps) => {
  const [showPswd, setShowPswd] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPswd((prevState) => !prevState);
  };

  return (
    <>
      <S.Container>
        <S.Input
          type={showPswd && type === "password" ? "text" : type}
          placeholder={placeholder}
        />
        {type === "password" && (
          <S.Eyes
            src={showPswd ? OpenEyes : CloseEyes}
            onClick={togglePasswordVisibility}
            alt=""
          />
        )}
      </S.Container>
    </>
  );
};

export default Input;
