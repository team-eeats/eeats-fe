import { instance } from "../axios";

const router = "/votes";

export const Vote = async (pollOptionId: string) => {
  return await instance.post(`${router}/${pollOptionId}`);
};
