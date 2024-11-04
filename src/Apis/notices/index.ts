import { instance } from "../axios";
import { NoticeListResponse } from "./type";

const router = "/notices";

export const NoticeList = async () => {
  return await instance.get<NoticeListResponse>(`${router}`);
};
