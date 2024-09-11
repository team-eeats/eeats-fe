import * as S from "./style";
import { Font } from "../../Styles/Font";

interface ButtonPropType {
  text: string;
  activate: boolean;
  onClick: () => void;
}

const Button = ({ text, activate, onClick }: ButtonPropType) => {
  const handleOnClick = () => {
    if (activate) onClick();
  };
  return (
    <S.ButtonContainer activate={activate} onClick={handleOnClick}>
      <Font text={text} kind="Button2" color="white" />
    </S.ButtonContainer>
  );
};

export default Button;
