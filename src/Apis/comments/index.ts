import { instance } from "../axios";
import { SuggestCommentResponse } from "./type";

const router = "/comments";
export const SuggestComment = async (suggestionId: string) => {
  return await instance.get<SuggestCommentResponse>(
    `${router}/${suggestionId}`
  );
};
