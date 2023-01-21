import http from "@/shared/support/http";
import type { Character } from "../support/models/character";
import apiEndpoints from "@/shared/support/constants/apiEndpoints";
import filterService from "@/characters/services/filterService";

const getCharacters = async (): Promise<Character[] | undefined> => {
  const filters = filterService.getFilters();
  let requestParams = "";
  if (filters.gender && filters.status) {
    requestParams = `/?gender=${filters.gender}&status=${filters.status}`;
  }

  if (filters.gender && !filters.status) {
    requestParams = `/?gender=${filters.gender}`;
  }

  if (!filters.gender && filters.status) {
    requestParams = `/?status=${filters.status}`;
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
