import { useEffect, useState } from "react";
import { Font } from "../../Styles/Font";
import * as S from "./styled";
import { GetAlarmList } from "../../Apis/notifications/type";
import { AlarmList, ReadAlarm } from "../../Apis/notifications";
import { timeForToday } from "../../utils/time";

type AlarmModalProps = {
  onClose: () => void;
};

export const AlarmModal: React.FC<AlarmModalProps> = () => {
  const [alarm, setAlarm] = useState<GetAlarmList | null>(null);

  useEffect(() => {
    const handleAlarm = async () => {
      try {
        const response = await AlarmList();
        setAlarm(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    handleAlarm();
  }, []);

  const handleRead = async (id: string) => {
    try {
      await ReadAlarm(id);
      setAlarm((prevAlarm) => {
        if (!prevAlarm) return prevAlarm;
        return {
          ...prevAlarm,
          notifications: prevAlarm.notifications.map((notification) =>
            notification.id === id
              ? { ...notification, isRead: true }
              : notification
          ),
        };
      });
    } catch (error) {
      console.error("Failed to mark as read:", error);
    }
  };

  return (
    <S.Container>
      <Font text="알림" kind="SubTitle2" />
      <S.AlarmWrapper>
        {alarm?.notifications.map((value) => (
          <S.Alarm key={value.id} onClick={() => handleRead(value.id)}>
            <S.Title>
              <Font text={value.title} kind="Label2" />
              {!value.isRead && <S.Check />}
            </S.Title>
            <Font
              text={timeForToday(value.createdAt)}
              kind="Label3"
              color="gray600"
            />
          </S.Alarm>
        ))}
      </S.AlarmWrapper>
    </S.Container>
  );
};
