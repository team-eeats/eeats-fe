export type GetAlarmList = {
  is_new: boolean;
  notifications: Notifications[];
};

export type Notifications = {
  id: string;
  title: string;
  content: string;
  isRead: boolean;
  topic: string;
  linkIdentifier: string;
  createdAt: string;
};
