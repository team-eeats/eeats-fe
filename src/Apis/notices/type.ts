export type NoticeListResponse = {
  notices: Notices[];
};

export type Notices = {
  id: string;
  title: string;
  createdAt: string;
};
