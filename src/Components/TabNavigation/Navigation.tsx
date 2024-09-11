import React from 'react';
import * as S from "./style";
import { Font } from "../../Styles/Font";

interface PropsType {
  option?: string;
  blackIcon?: React.ReactNode;
  whiteIcon?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

const Navigation: React.FC<PropsType> = ({ option, blackIcon, whiteIcon, selected = false, onClick }) => {
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
