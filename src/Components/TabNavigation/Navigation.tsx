import React from "react";
import * as S from "./style"
import { Font } from "../../Styles/Font";

interface NavigationProps {
  option: string;
  blackIcon: JSX.Element;
  whiteIcon: JSX.Element;
  selected: boolean;
  onClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ option, blackIcon, whiteIcon, selected, onClick }) => {
  return (
    <S.Content onClick={onClick} selected={selected}>
      {selected ? whiteIcon : blackIcon}
      <Font
        text={option}
        kind="Heading4"
        color={selected ? 'white' : 'gray700'}
      />
    </S.Content>
  );
};

export default Navigation;