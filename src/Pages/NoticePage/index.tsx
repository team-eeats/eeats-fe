import Notice from "../../Components/Notice";
import { Font } from "../../Styles/Font";
import * as S from "./style";
import { NoticeListResponse } from "../../Apis/notices/type";
import { useEffect, useState } from "react";
import { NoticeList } from "../../Apis/notices";

export const NoticePage = () => {
  const [data, setData] = useState<NoticeListResponse | null>(null);

  useEffect(() => {
    const handleNotice = async () => {
      try {
        const response = await NoticeList();
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    handleNotice();
  }, []);
  return (
    <S.Container>
      <Font text="공지사항" kind="Heading1" color="black" />
      <S.NoticeWrapper>
        {data?.notices.map((value) => (
          <Notice key={value.id} value={value} />
        ))}
      </S.NoticeWrapper>
    </S.Container>
  );
};
