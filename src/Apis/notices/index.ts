import { instance } from "../axios";
import { NoticeListResponse, NoticeDetailResponse } from "./type";

const router = "/notices";

export const NoticeList = async () => {
  return await instance.get<NoticeListResponse>(`${router}`);
};

export const NoticeDetail = async (noticeId: number) => {
  return await instance.get<NoticeDetailResponse>(`${router}/${noticeId}`);
};
