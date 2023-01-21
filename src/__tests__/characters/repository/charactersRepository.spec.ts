import { describe, expect, it, vi } from "vitest";
import http from "@/shared/support/http.ts";
import charactersRepository from "@/characters/repository/characterRepository";
import apiEndpoints from "@/shared/support/constants/apiEndpoints.ts";

describe("/characters/repository/characterRepository", () => {
  const FEMALE_GENDER = "female";
  const ALIVE_STATUS = "alive";

  it("should make request without filters", async () => {
    http.get = vi.fn();
    charactersRepository.getCharacters();
    expect(http.get).toHaveBeenCalledWith(apiEndpoints.character);
  });

  it("should make request with gender filter", async () => {
    http.get = vi.fn();
    charactersRepository.getCharacters(FEMALE_GENDER);
    const params = `${apiEndpoints.character}/?gender=female`;
    expect(http.get).toHaveBeenCalledWith(params);
  });
});
