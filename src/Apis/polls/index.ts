import { instance } from "../axios";
import { VoteListResponse } from "./type";

const router = '/polls'

export const VoteList = async () => {
  return await instance.get<VoteListResponse>(`${router}`);
};