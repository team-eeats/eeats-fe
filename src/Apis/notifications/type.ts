export type Alarm = 
  | "COMMENT"
  | "NOTICE"
  | "ALLERGY"

export type NotificationsDeviceToken = {
  diviceToken: string;
}

export type GetAlarmList = {
  is_new: boolean;
  notifications: Notifications[];
}

export type Notifications = {
  id: string;
  title: string;  
  content: string;
  isRead: boolean;
  topic: string;
  linkIdentifier: string;
  createdAt: string;
}

export type SetNotifications = {
  topic: Alarm;
}

export type NotificationStatus = {
  subscriptions: SubscriptionsResponse[];
}

export type SubscriptionsResponse = {
  topic: Alarm;
  isSubscribed: boolean;
}