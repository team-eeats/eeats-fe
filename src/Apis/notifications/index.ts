import { instance } from "../axios";
import {
  NotificationsDeviceToken,
  GetAlarmList,
  SetNotifications,
  NotificationStatus,
} from './type'

const router = '/notifications'

export const DeviceToken = async() => {
  return await instance.patch<NotificationsDeviceToken>(`${router}/token`)
}

export const AlarmList = async() => {
  return await instance.get<GetAlarmList>(`${router}/`)
}

export const ModifyNotice = async (notificationId: string) => {
  return await instance.patch(
        `${router}/${notificationId}`
      );
};

export const SetNotification = async() => {
  return await instance.patch<SetNotifications>(`${router}/topic`)
}

export const WholeSetNotification = async() => {
  return await instance.patch(`${router}/topics`)
}

export const NotificationsStatus = async() => {
  return  await instance.get<NotificationStatus>(`${router}/topic`)
}