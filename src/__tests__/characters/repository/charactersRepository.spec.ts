import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import http from "@/shared/support/http.ts";
import charactersRepository from "@/characters/repository/characterRepository";
import apiEndpoints from "@/shared/support/constants/apiEndpoints.ts";
import { setActivePinia, createPinia } from "pinia";
import filterService from "@/characters/services/filterService";

describe("/characters/repository/characterRepository", () => {
  beforeAll(() => {
    setActivePinia(createPinia());
  });

  beforeEach(() => {
    filterService.setNewGenderFilter("");
    filterService.setNewAliveStatusFilter("");
  });

  const GENDER_FEMALE = "female";
  const STATUS_ALIVE = "alive";

  it("should make request without filters", async () => {
    http.get = vi.fn();
    charactersRepository.getCharacters();
    expect(http.get).toHaveBeenCalledWith(apiEndpoints.character);
  });

  it("should make request with gender filter", async () => {
    http.get = vi.fn();
    filterService.setNewGenderFilter(GENDER_FEMALE);
    charactersRepository.getCharacters();
    const params = `${apiEndpoints.character}/?gender=${GENDER_FEMALE}`;
    expect(http.get).toHaveBeenCalledWith(params);
  });

  it("should make request with status filter", async () => {
    http.get = vi.fn();
    filterService.setNewAliveStatusFilter(STATUS_ALIVE);
    charactersRepository.getCharacters();
    const params = `${apiEndpoints.character}/?status=${STATUS_ALIVE}`;
    expect(http.get).toHaveBeenCalledWith(params);
  });

  it("should make request with status and gender filter", async () => {
    http.get = vi.fn();
    filterService.setNewAliveStatusFilter(STATUS_ALIVE);
    filterService.setNewGenderFilter(GENDER_FEMALE);
    console.log(filterService.getFilters());
    charactersRepository.getCharacters();
    const params = `${apiEndpoints.character}/?gender=${GENDER_FEMALE}&status=${STATUS_ALIVE}`;
    expect(http.get).toHaveBeenCalledWith(params);
  });
});
