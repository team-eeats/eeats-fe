import { useMutation } from "react-query";
import { instance } from "../axios";
import {
  CreateSuggestRequest,
  SuggestListResponse,
  ModifySuggestRequest,
  GetMySuggestResponse,
  SuggestDetailResponse,
} from "./type";

const router = "/suggestions";

export const CreateSuggest = async (data: CreateSuggestRequest) => {
  return await instance.post(`${router}`, data);
};

export const ModifySuggest = (suggestionId: string) => {
  return useMutation(
    async (modifySuggestData: ModifySuggestRequest) => {
      const { data } = await instance.patch(
        `${router}/${suggestionId}`,
        modifySuggestData
      );
      return data;
    },
    {
      onError: (error: Error) => {
        console.error("건의 수정 에러: ", error.message);
      },
    }
  );
};

export const GetMySuggest = async () => {
  return await instance.get<GetMySuggestResponse>(`${router}/my`);
};

export const DeleteSuggest = async (suggestionId: string) => {
  return await instance.delete(`${router}/${suggestionId}`);
};

export const SuggestList = async () => {
  return await instance.get<SuggestListResponse>(`${router}`);
};

export const SuggestDetail = async (suggestionId: string) => {
  return await instance.get<SuggestDetailResponse>(`${router}/${suggestionId}`);
};
