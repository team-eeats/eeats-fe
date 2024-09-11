import * as S from './style';
import { HomeIcon, HomeWhiteIcon, VoteIcon, VoteWhiteIcon, SuggestIcon, SuggestWhiteIcon } from '../../assets/img/SVG/index';
import { useState } from 'react';
import Navigation from './Navigation';

const TabValue = [
  {
    name: "Home",
    option: "홈",
    blackIcon: <HomeIcon />,
    whiteIcon: <HomeWhiteIcon />
  },
  {
    name: "Vote",
    option: "투표",
    blackIcon: <VoteIcon />,
    whiteIcon: <VoteWhiteIcon />
  },
  {
    name: "Suggest",
    option: "건의",
    blackIcon: <SuggestIcon />,
    whiteIcon: <SuggestWhiteIcon />
  },
]

const TabBar = () => {
  const [isHover, setIsHover] = useState<boolean>(false)
  const [selectIndex, setSelectIndex] = useState<number>(0)

  return (
    <S.NavigationWrap
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      >
      {TabValue.map(({ option, blackIcon, whiteIcon }, index) => (
        <div>
          {isHover ?
            <Navigation
              key={index}
              option={option}
              blackIcon={blackIcon}
              whiteIcon={whiteIcon}
              selected={selectIndex === index}
              onClick={() => setSelectIndex(index)}
            />
            :
            <S.LineWrap>
              <S.Line selected={selectIndex === index}></S.Line>
            </S.LineWrap>
          }
        </div>
      ))}
    </S.NavigationWrap>
  )
}

export default TabBar;
