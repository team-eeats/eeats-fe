import * as S from "./style";
import { Font } from "../../Styles/Font";

interface ButtonPropType {
  text: string;
  activate: boolean;
  available: boolean;
  onClick: () => void;
}

const Button = ({ text, activate, available, onClick }: ButtonPropType) => {
  const handleOnClick = () => {
    if (activate && available) onClick();
  };
  return (
    <S.ButtonContainer
      activate={activate}
      available={available}
      onClick={handleOnClick}
    >
      <Font text={text} kind="Button2" color="white" />
    </S.ButtonContainer>
  );
};

export default Button;
