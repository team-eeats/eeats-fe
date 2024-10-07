import * as S from "./style";
import { HomeIcon } from "../../Assets/img/SVG/HomeIcon";
import { HomeWhiteIcon } from "../../Assets/img/SVG/HomeWhiteIcon";
import { VoteIcon } from "../../Assets/img/SVG/VoteIcon";
import { VoteWhiteIcon } from "../../Assets/img/SVG/VoteWhiteIcon";
import { SuggestIcon } from "../../Assets/img/SVG/SuggestIcon";
import { SuggestWhiteIcon } from "../../Assets/img/SVG/SuggestWhiteIcon";
import { useState } from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const TabValue = [
  {
    name: "Home",
    option: "홈",
    blackIcon: <HomeIcon />,
    whiteIcon: <HomeWhiteIcon />,
    onClick: "/main",
  },
  {
    name: "Vote",
    option: "투표",
    blackIcon: <VoteIcon />,
    whiteIcon: <VoteWhiteIcon />,
    onClick: "/vote",
  },
  {
    name: "Suggest",
    option: "건의",
    blackIcon: <SuggestIcon />,
    whiteIcon: <SuggestWhiteIcon />,
    onClick: "/suggest",
  },
];

const TabBar = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <S.NavigationWrap
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {TabValue.map(({ option, blackIcon, whiteIcon, onClick }, index) => (
        <div>
          {isHover ? (
            <Navigation
              key={index}
              option={option}
              blackIcon={blackIcon}
              whiteIcon={whiteIcon}
              selected={selectIndex === index}
              onClick={() => {
                setSelectIndex(index);
                handleClick(onClick);
              }}
            />
          ) : (
            <S.LineWrap>
              <S.Line selected={selectIndex === index}></S.Line>
            </S.LineWrap>
          )}
        </div>
      ))}
    </S.NavigationWrap>
  );
};

export default TabBar;
