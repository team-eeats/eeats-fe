import * as S from "./style";
import { HomeIcon, HomeWhiteIcon, VoteIcon, VoteWhiteIcon, SuggestIcon, SuggestWhiteIcon } from "../../Assets/img/SVG/index";
import { useState } from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import useNavigation from "../../store/useNavigation";

type SelectState = "Home" | "Vote" | "Suggest";

interface PropsType {
  name: SelectState;
  option: string;
  blackIcon: JSX.Element;
  whiteIcon: JSX.Element;
  onClick: string;
}

const TabValue: PropsType[] = [
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
  const [selectOption, setSelectOption] = useState<string>("Home");
  const navigate = useNavigate();
  const { click, select } = useNavigation();

  const handleClick = (name: SelectState) => {
    click(name);

    switch (select) {
      case "Home":
        navigate("/main");
        break;
      case "Suggest":
        navigate("/suggest");
        break;
      case "Vote":
        navigate("/vote");
        break;
    }
  };

  return (
    <S.NavigationWrap
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {TabValue.map(({ name, option, blackIcon, whiteIcon }) => (
        <div key={name}>
          {isHover ? (
            <Navigation
              option={option}
              blackIcon={blackIcon}
              whiteIcon={whiteIcon}
              selected={select === name}
              onClick={() => {
                setSelectOption(name);
                handleClick(name);
              }}
            />
          ) : (
            <S.LineWrap>
              <S.Line selected={selectOption === name}></S.Line>
            </S.LineWrap>
          )}
        </div>
      ))}
    </S.NavigationWrap>
  );
};

export default TabBar;
