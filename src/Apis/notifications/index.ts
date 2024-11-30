import { instance } from "../axios";
import { GetAlarmList } from "./type";

const router = "/notifications";

export const AlarmList = async (/*is_new: boolean*/) => {
  return await instance.get<GetAlarmList>(
    `${router}`
    // , {
    //   params: { is_new },
    // }
  );
};

export const ReadAlarm = async (notificationId: string) => {
  return await instance.patch(`${router}/${notificationId}`);
};
