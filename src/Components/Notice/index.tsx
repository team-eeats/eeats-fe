import { useEffect, useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";
import MessageIcon from "../../assets/img/Message.svg";
import NewMark from "../../assets/img/NewMark.svg";
import { NoticeDetailResponse, Notices } from "../../Apis/notices/type";
import { NoticeDetail } from "../../Apis/notices";
import { passOneDay, timeForToday } from "../../utils/time";

const Notice = ({ value }: { value: Notices }) => {
  const id = value.id;
  const [selected, setSelected] = useState(false);
  const [newMessage, setNewMessage] = useState(true);
  const [detail, setDetail] = useState<NoticeDetailResponse | null>(null);

  useEffect(() => {
    const handleDetail = async () => {
      try {
        const response = await NoticeDetail(id);
        console.log(response.data);
        setDetail(response.data);
        const isNew = passOneDay(response.data.createdAt);
        setNewMessage(!isNew);
      } catch (error) {
        console.log(error);
      }
    };

    handleDetail();
  }, [id]);

  return (
    <S.Container onClick={() => setSelected(!selected)}>
      <S.AnnouncementWrap>
        <img src={MessageIcon} alt="메세지" />
        <S.InfoWrap>
          <S.TitleWrap>
            <Font text={detail?.title} kind="Heading4" />
            {newMessage ? <img src={NewMark} alt="최신" /> : <></>}
          </S.TitleWrap>
          <Font
            text={timeForToday(detail?.createdAt || "")}
            kind="label2"
            color="gray600"
          />
        </S.InfoWrap>
      </S.AnnouncementWrap>
      {selected ? (
        <S.Content>
          <Font text={detail?.content} kind="Body2" />
        </S.Content>
      ) : (
        <></>
      )}
    </S.Container>
  );
};

export default Notice;
