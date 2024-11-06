import * as S from "./Style";
import CloseEyes from "../../assets/img/SVG/CloseEyes.svg";
import OpenEyes from "../../assets/img/SVG/OpenEyes.svg";
import { ChangeEvent, useState } from "react";
import useInputStore from "../../store/useInputStore";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, type, placeholder, value, onChange }: InputProps) => {
  const [showPswd, setShowPswd] = useState(false);
  const { inputs, setInput } = useInputStore();

  const togglePasswordVisibility = () => {
    setShowPswd((prevState) => !prevState);
  };

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setInput(id, e.target.value);
    }
  };

  return (
    <>
      <S.Container>
        <S.Input
          type={showPswd && type === "password" ? "text" : type}
          placeholder={placeholder}
          value={value ?? (inputs[id] || "")}
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
