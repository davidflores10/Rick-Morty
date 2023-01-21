import http from "@/shared/support/http";
import type { Character } from "../support/models/character";
import apiEndpoints from "@/shared/support/constants/apiEndpoints";

const getCharacters = async (
  gender: string | undefined
): Promise<Character[] | undefined> => {
  let requestParams = "";
  if (gender) {
    requestParams = `/?gender=${gender}`;
  }

  try {
    const { data } = await http.get(apiEndpoints.character + requestParams);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getCharacters,
};
