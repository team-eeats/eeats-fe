import { instance } from "../axios";

const router = "/allergy";

export const AllergyWarning = async (date: string) => {
  return await instance.get(`${router}`, {
    params: { date },
  });
};
