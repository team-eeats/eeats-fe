import * as S from "./Style"
import { Font } from "../../Styles/Font"
import AnnouncementImg from "../../assets/img/SVG/Announcement.svg"

const Announcement = () => {
  return (
    <>
      <S.Container>
        <img src={AnnouncementImg} alt="" />
        <Font text="'오늘 석식 메뉴 변경 안내' 새로운 공지가 올라왔어요. 확인해보세요!" kind="Body1" />
      </S.Container>
    </>
  )
}

export default Announcement
