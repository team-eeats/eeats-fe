import * as S from "./style"
import SuggestBox from "../../Components/Suggest/UserSuggestBox";
import Announcement from "../../Components/Announcement/Announcement";
import { Font } from "../../Styles/Font";
import Write from '../../assets/img/SVG/Write.svg'

const Suggest = () => {
  return (
    <S.Container>
      <S.Content>
        <Announcement />
        <S.SuggestWrap>
          <SuggestBox />
          <SuggestBox />
          <SuggestBox />
          <SuggestBox />
          <SuggestBox />
          <SuggestBox />
        </S.SuggestWrap>
      </S.Content>
      <S.ProposalButton>
          <Font kind="Button2" text="급식 건의하기" color="white" />
          <S.Icon src={Write} />
        </S.ProposalButton>
    </S.Container>
  )
}

export default Suggest