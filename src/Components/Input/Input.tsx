import * as S from "./Style";
import CloseEyes from "../../assets/img/SVG/CloseEyes.svg";
import OpenEyes from "../../assets/img/SVG/OpenEyes.svg";
import { ChangeEvent, useState } from "react";
import useInputStore from "../../store/useInputStore";

interface InputProps {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: InputProps) => {
  const [showPswd, setShowPswd] = useState(false);
  const {value, setValue} = useInputStore();

  const togglePasswordVisibility = () => {
    setShowPswd((prevState) => !prevState);
  };

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <S.Container>
        <S.Input
          type={showPswd && type === "password" ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={handleValue}
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
